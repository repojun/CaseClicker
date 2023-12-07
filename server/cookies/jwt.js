const jwt = require("jsonwebtoken");

function decodeCookie(value = "") {
  try {
    if (value.trim()) {
      let token = jwt.verify(value, process.env.JWT_TOKEN, {
        algorithms: ["HS256"],
      });
      return token;
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

function encodeCookie(value = "") {
  try {
    if (value) {
      let token = jwt.sign(value, process.env.JWT_TOKEN, {
        expiresIn: "28d",
        algorithm: "HS256",
      });
      return token;
    }
    return undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

module.exports = { encodeCookie, decodeCookie };