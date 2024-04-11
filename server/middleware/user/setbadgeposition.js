const { getCookie } = require("../../cookies/get");
const { fetchUser, updateUserBadgePosition } = require("../../database/queries/users");

const setBadgePosition = async (req, res) => {
  const { badgeName, badgePosition } = req.body;
  if (!badgeName || !badgePosition === null) {

    return res.sendStatus(400);
  }

  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id);

  if (!user || !query) {
    return res.sendStatus(404);
  }

  await updateUserBadgePosition(user.id, badgeName, badgePosition);
  return res.sendStatus(200);
};

module.exports = setBadgePosition;
