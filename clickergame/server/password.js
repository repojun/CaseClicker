const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
  * Hash a password
  * @param {string} password
  * @returns {string}
*/

const generate = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

/**
  * Check if the user password matches the user hash password
  * @param {string} password
  * @param {string} hashPassword
  * @returns {boolean} Returns boolean if password matches
*/

const verify = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = {verify, generate};