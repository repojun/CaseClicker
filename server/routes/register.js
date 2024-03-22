const {fetchLogin, createUser} = require("../database/queries/users");
const express = require("express"),
  router = express.Router();

router.post("/", async (req, res) => {
  const {body = {}} = req; // destructure request object and get me {body} from react

  if (!body.email || !body.username || !body.password) {
    return res.status(400).send("Missing fields"); // bad request
  }
  const login = await fetchLogin(body.username, body.email); // runs fetchLogin() from users.j
  if (login) {
    return res.status(400).send("User already exists"); // user exists already
  }

  const user = await createUser(body.email, body.username, body.password); // now that we can compare, we can send the proper data back below

  return res.status(200).json(user); // successful status and send user data (balance, id etc)
});

module.exports = router;
