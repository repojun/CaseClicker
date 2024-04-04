const { getCookie } = require("../../cookies/get");
const { fetchUser, updateUserPassivePower } = require("../../database/queries/users");

const setPassivePower = async (req, res) => {
  const { passivePower } = req.body;
  if (!setPassivePower) {
    return res.sendStatus(400);
  }

  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id);

  if (!user || !query) {
    return res.sendStatus(404);
  }

  await updateUserPassivePower(user.id, passivePower);
  return res.sendStatus(200);
};

module.exports = setPassivePower;
