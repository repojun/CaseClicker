const { getCookie } = require("../cookies/get");
const { fetchUser, updateUserPassiveUpgradeLevel, } = require("../database/queries/users");

const setPassiveUpgradeLevel = async (req, res) => {
  const { passiveUpgradeID, newLevel } = req.body;
  if (!passiveUpgradeID || !newLevel) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id)

  if (!user || !query) {
    return res.sendStatus(400);
  }

  await updateUserPassiveUpgradeLevel(user.id, passiveUpgradeID, newLevel)
  return res.sendStatus(200);

};

module.exports = setPassiveUpgradeLevel;