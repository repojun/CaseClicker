const { fetchItemName } = require("../../database/queries/users");
const { getCookie } = require("../../cookies/get");

const getItem = async (req, res) => {
  const { item } = req.body;
  const user = getCookie(req.cookies, "user_cookie", true);
  if (!user) {
    return res.sendStatus(404);
  }
  const query = await fetchItemName(user.id, item);

  if (!query) {
    return res.sendStatus(404);
  }
  return res.json(query);
};

module.exports = getItem;
