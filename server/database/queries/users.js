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

const updateUserBalance = async (userID, balance) => {
  const user = await userSchema.findOne({ id: userID});
  user.balance = balance;
  await user.save();
}

const updateUserPassiveUpgrade = async(userID, passiveUpgradeID) => {
  const user = await userSchema.findOne({ id: userID});
  // user[`passiveUpgrade${passiveUpgradeID}`] = 1;
  user.passiveUpgrades[`passiveUpgrade${passiveUpgradeID}`].value = 1;
  await user.save(); 
}

const updateUserPassiveUpgradeLevel = async(userID, passiveUpgradeID, level) => {
  const user = await userSchema.findOne({ id: userID});
  // user[`passiveUpgrade${passiveUpgradeID}`] = 1;
  user.passiveUpgrades[`passiveUpgrade${passiveUpgradeID}.level`].level = level;
  await user.save(); 
}

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
  console.log("USER ID FOUND:" + userID)
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

module.exports = { fetchUser, createUser, fetchLogin, updateUserBalance, updateUserPassiveUpgrade };
