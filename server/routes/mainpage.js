const { fetchUser } = require("../database/queries/users");
const { clientSideCookieOptions } = require("../cookies/options");
const { setServerSideCookie } = require("../cookies/set")

const express = require("express"),
  router = express.Router();

router.get("/", async (req, res) => {
  const { id } = req.query;
  const user = await fetchUser(id);
  setServerSideCookie(res, "user_cookie", user, true
    
  );


  if (!user) {
    return res.status(404).send("FATAL ERROR: User Not Found!");
  }
  return res.status(200).json(user);
});

module.exports = router;