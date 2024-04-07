const { getCookie } = require("../../cookies/get");
const { fetchUser, updateUserPassiveLimit } = require("../../database/queries/users");

const setPassiveLimit = async (req, res) => {
  const { passiveLimit } = req.body;
  if (!passiveLimit) {
    return res.sendStatus(400);
  }

  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id);

  if (!user || !query) {
    return res.sendStatus(404);
  }

  await updateUserPassiveLimit(user.id, passiveLimit);
  return res.sendStatus(200);
};

module.exports = setPassiveLimit;
