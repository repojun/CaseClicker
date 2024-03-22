const { getCookie } = require("../cookies/get");
const { fetchUser, updateUserPremiumBalance, } = require("../database/queries/users");

const setPremiumBalance = async (req, res) => {
  const { premiumBalance } = req.body;
  if (!premiumBalance) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);

  const query = await fetchUser(user.id)
  if (!user || !query) {
    return res.sendStatus(404);
  }
  await updateUserPremiumBalance(user.id, premiumBalance)
  return res.sendStatus(200);
};

module.exports = setPremiumBalance;