const { getCookie } = require("../../cookies/get");
const { fetchUser, updatePassiveIncomeStore } = require("../../database/queries/users");

const setPassiveIncomeStore = async (req, res) => {
  const { income } = req.body;
  if (income == null) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);

  const query = await fetchUser(user.id);
  if (!user || !query) {
    return res.sendStatus(404);
  }
  await updatePassiveIncomeStore(user.id, income);
  return res.sendStatus(200);
};

module.exports = setPassiveIncomeStore;
