const express = require("express"),
  router = express.Router();

const { getCookie } = require("../cookies/get");
const { fetchUser, updateUserBalance, updateUserPassiveUpgrade } = require("../database/queries/users");

router.get("/exists", async (req, res) => {
  const user = getCookie(req.cookies, "user_cookie", true);
  if (!user) {
    return res.sendStatus(404);
  }
  console.log(user);
  const query = await fetchUser(user.id)
  if (!query) {
    return res.sendStatus(404);
  }
  return res.json(query);
});

router.post("/setbalance", async (req, res) => {
  const { balance } = req.body;
  if (!balance) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);

  const query = await fetchUser(user.id)
  if (!user || !query) {
    return res.sendStatus(404);
  }
  await updateUserBalance(user.id, balance)
  return res.sendStatus(200);
});

router.post("/setpassiveupgrade", async (req, res) => {
  const { passiveUpgradeID } = req.body;
  if (!passiveUpgradeID) {
    return res.sendStatus(400);
  }

  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id)

  if (!user || !query) {
    return res.sendStatus(404);
  }

  await updateUserPassiveUpgrade(user.id, passiveUpgradeID)
  return res.sendStatus(200);
})

router.post("/setpassiveupgradelevel"), async (req, res) => {
  const { passiveUpgradeID, level } = req.body;
  if (!passiveUpgradeID || !level) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id)

  if (!user || !query) {
    return res.sendStatus(404);
  }

  await updateUserPassiveUpgradeLevel(user.id, passiveUpgradeID, level)
  return res.sendStatus(200);

}




module.exports = router;