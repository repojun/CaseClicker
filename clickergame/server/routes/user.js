const express = require("express"),
  router = express.Router();

const { getCookie } = require("../cookies/get");

router.get("/exists", async (req, res) => {
  console.log(req.cookies);
  const user = getCookie(req.cookies, "user_cookie", true);
  console.log(user);
  if (!user) {
    return res.sendStatus(404);
  }
  return res.sendStatus(200);
});

module.exports = router;
