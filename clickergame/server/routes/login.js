const { setServerSideCookie } = require("../cookies/set");
const { fetchLogin, fetchUser } = require("../database/queries/users");
const { verify } = require("../password");
const express = require("express"),
  router = express.Router();

router.post("/", async (req, res) => {
  const { body = {} } = req; // destructure request object and get me {body} from react
  if (!body.username || !body.password) {
    return res.status(400).send("User not found."); // bad request
  }
  const login = await fetchLogin(body.username); // runs fetchLogin() from users.js
  if (!login) {
    return res.status(404).send("Username does not exist."); // couldnt find user
  }
  const matchPassword = verify(body.password, login.password); // body.password is the user's login attempt password, user.password is the hashed password from the database
  if (!matchPassword) {
    return res.status(403).send("Password is incorrect."); // send forbidden code as the password does not match
  }
  const user = await fetchUser(login.id); // now that we can compare, we can send the proper data back below
  if (user) {
    setServerSideCookie(res, "user_cookie", user, true);
    return res.redirect("/dashboard"); // successful status and send user data (balance, id etc)
  }
  return res.status(400).send("User not found."); // bad request
});

module.exports = router;
