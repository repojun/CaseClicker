const setPassiveUpgrade = async (req, res) => {
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
};

module.exports = setPassiveUpgrade;