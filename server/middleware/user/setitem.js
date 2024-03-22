const { getCookie } = require("../cookies/get");
const { fetchUser, updateUserInventory } = require("../database/queries/users");

const setItem = async (req, res) => {
  const { item } = req.body;
  if (!item) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id)

  if (!user || !query) {
    return res.sendStatus(400);
  }

  await updateUserInventory(user.id, item)
  return res.sendStatus(200);

};

module.exports = setItem;