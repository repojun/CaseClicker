const userSchema = require("../schema/users"); // import
const loginSchema = require("../schema/login");
const { generate } = require("../../password");
const { v4: uuidv4 } = require("uuid");

const fetchUser = async (userID) => {
  // userID given to try find info on user

  const user = await userSchema.findOne({ id: userID }).lean(); // find one document where the ID matches the user ID provided
  if (user) {
    // if the user exists, return the user as an object?
    return user;
  }
  return null;
};

const fetchTopTen = async () => {
  const topTen = await userSchema
    .find({
      netWorth: { $gt: 0 },
    })
    .sort({ netWorth: -1 })
    .limit(10)
    .lean();
  return topTen;
};

const getUserPosition = async (userID) => {
  const user = await userSchema.findOne({ id: userID }).lean();
  const final = await userSchema.countDocument({ balance: { $gt: user.balance } });

  return final;
};

const fetchUserByName = async (username) => {
  const user = await userSchema.findOne({ username: username }).lean();
  if (user) {
    return user;
  }
  return null;
};

const fetchItemName = async (userID, entname) => {
  const user = await userSchema.findOne({ id: userID });
  if (entname) {
    return user.inventory[`${entname}`];
  }
};

const updateUserProfilePicture = async (userID, newProfileURL) => {
  const user = await userSchema.findOne({ id: userID });
  user.profilePicture = newProfileURL;
  await user.save();
};

const updateUserPassivePower = async (userID, newPassivePower) => {
  const user = await userSchema.findOne({ id: userID });
  user.passivePower = newPassivePower;
  await user.save();
};

const updateUserPassiveLimit = async (userID, newPassiveLimit) => {
  const user = await userSchema.findOne({ id: userID });
  user.passiveLimit = newPassiveLimit;
  await user.save();
};

const updateUserBalance = async (userID, balance) => {
  const user = await userSchema.findOne({ id: userID });

  user.balance = balance;

  const items = !user.inventory
    ? []
    : Object.values(user.inventory)
        .filter(({ value }) => value > 0)
        .map((item) => {
          if (item.value > 1) {
            return Array.from({ length: item.value }, () => item);
          }
          return item;
        })
        .flat(Infinity);
  user.netWorth = items.reduce((acc, item) => acc + item.price, 0) + user.balance;
  await user.save();
};

const addUserBalancePaypal = async (userID, amountToAdd) => {
  const user = await userSchema.findOne({ id: userID });
  user.balance += amountToAdd;
  user.netWorth += amountToAdd;
  await user.save();
};

const updateUserInventory = async (userID, item, add) => {
  const user = await userSchema.findOne({ id: userID });

  if (add == true) {
    user.inventory[`${item}`].value += 1;
  }

  if (add == false) {
    user.inventory[`${item}`].value -= 1;
  }
  const items = !user.inventory
    ? []
    : Object.values(user.inventory)
        .filter(({ value }) => value > 0)
        .map((item) => {
          if (item.value > 1) {
            return Array.from({ length: item.value }, () => item);
          }
          return item;
        })
        .flat(Infinity);
  user.netWorth = items.reduce((acc, item) => acc + item.price, 0) + user.balance;
  await user.save();
};

const updateUserPremiumBalance = async (userID, premiumBalance) => {
  const user = await userSchema.findOne({ id: userID });
  user.premiumBalance = premiumBalance;
  await user.save();
};

const updatePassiveIncomeStore = async (userID, passiveIncomeStore) => {
  const user = await userSchema.findOne({ id: userID });
  user.passiveIncomeStore = passiveIncomeStore;
  await user.save();
};

const updateUserPassiveUpgrade = async (userID, passiveUpgradeID) => {
  const user = await userSchema.findOne({ id: userID });
  // user[`passiveUpgrade${passiveUpgradeID}`] = 1;
  user.passiveUpgrades[`passiveUpgrade${passiveUpgradeID}`].value = 1;
  await user.save();
};

const updateUserBadgePosition = async (userID, badgeName, badgePosition) => {
  const user = await userSchema.findOne({ id: userID });
  console.log(badgePosition);

  for (const [name, badge] of Object.entries(user.badges)) {
    if (badge.profilePosition === badgePosition && name !== badgeName) {
      badge.profilePosition = -1;
    }
  }

  user.badges[badgeName].profilePosition = badgePosition;
  await user.save();
};

const updateUserPassiveUpgradeLevel = async (userID, passiveUpgradeID, level) => {
  const user = await userSchema.findOne({ id: userID });
  // user[`passiveUpgrade${passiveUpgradeID}`] = 1;
  user.passiveUpgrades[`passiveUpgrade${passiveUpgradeID}`].level = level;
  await user.save();
};

const updateUserBio = async (userID, bio) => {
  const user = await userSchema.findOne({ id: userID });
  user.bio = bio;
  await user.save();
};

const fetchLogin = async (username, email) => {
  if (email) {
    const loginEmail = await loginSchema.findOne({ email });
    if (loginEmail) {
      return email;
    }
  }
  const login = await loginSchema.findOne({ username });
  if (login) {
    return login;
  }
  return null;
};

const createUser = async (email, username, password) => {
  const hashedPassword = generate(password);
  const userID = uuidv4();

  const query = new loginSchema({
    id: userID,
    email,
    username,
    password: hashedPassword,
  }); // If user doesnt exist create a new user with that ID
  await query.save();
  const userQuery = new userSchema({ id: userID, username });
  await userQuery.save();
  return userQuery;
};

module.exports = { fetchUser, createUser, fetchLogin, fetchItemName, updateUserBio, updateUserPassiveLimit, updatePassiveIncomeStore, updateUserBadgePosition, updateUserPassivePower, addUserBalancePaypal, updateUserBalance, getUserPosition, updateUserProfilePicture, updateUserInventory, updateUserPassiveUpgrade, updateUserPassiveUpgradeLevel, updateUserPremiumBalance, fetchUserByName, fetchTopTen };
