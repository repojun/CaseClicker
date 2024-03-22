const { getCookie } = require("../cookies/get");
const { fetchUser, updateUserBalance } = require("../database/queries/users");

const setBalance = async (req, res) => {
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
};

module.exports = setBalance;