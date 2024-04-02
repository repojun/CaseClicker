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
      balance: { $gt: 0 },
    })
    .sort({ balance: -1 })
    .limit(10)
    .lean();
  return topTen;
};

const getUserPosition = async (userID) => {
  const user = await userSchema.findOne({ id: userID }).lean();
  const final = await userSchema.countDocument({ balance: { $gt: user.balance } })

  return final;
}

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
}

const updateUserProfilePicture = async (userID, newProfileURL) => {
  const user = await userSchema.findOne({ id: userID });
  user.profilePicture = newProfileURL;
  await user.save();
}

const updateUserBalance = async (userID, balance) => {
  const user = await userSchema.findOne({ id: userID });
  user.balance = balance;
  await user.save();
};

const updateUserNetworth = async (userID, networth) => {
  const user = await userSchema.findOne({id: userID});
  user.netWorth = networth;
  await user.save();
}

const updateUserInventory = async (userID, item, add) => {
  const user = await userSchema.findOne({ id: userID });

  if (add == true) {
  user.inventory[`${item}`].value += 1;
  } 

  if (add == false) {
    user.inventory[`${item}`].value -= 1;
  }

  await user.save();
};

const updateUserPremiumBalance = async (userID, premiumBalance) => {
  const user = await userSchema.findOne({ id: userID });
  user.premiumBalance = premiumBalance;
  await user.save();
};

const updateUserPassiveUpgrade = async (userID, passiveUpgradeID) => {
  const user = await userSchema.findOne({ id: userID });
  // user[`passiveUpgrade${passiveUpgradeID}`] = 1;
  user.passiveUpgrades[`passiveUpgrade${passiveUpgradeID}`].value = 1;
  await user.save();
};

const updateUserPassiveUpgradeLevel = async (userID, passiveUpgradeID, level) => {
  const user = await userSchema.findOne({ id: userID });
  // user[`passiveUpgrade${passiveUpgradeID}`] = 1;
  user.passiveUpgrades[`passiveUpgrade${passiveUpgradeID}`].level = level;
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

module.exports = { fetchUser, createUser, fetchLogin, fetchItemName, updateUserBalance, updateUserNetworth, getUserPosition, updateUserProfilePicture, updateUserInventory, updateUserPassiveUpgrade, updateUserPassiveUpgradeLevel, updateUserPremiumBalance, fetchUserByName, fetchTopTen };
