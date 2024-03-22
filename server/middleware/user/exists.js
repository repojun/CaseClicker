const { getCookie } = require("../cookies/get");
const { fetchUser } = require("../database/queries/users");

const userExists = async (req, res) => {
  const user = getCookie(req.cookies, "user_cookie", true);
  if (!user) {
    return res.sendStatus(404);
  }

  const query = await fetchUser(user.id);
  if (!query) {
    return res.sendStatus(404);
  }
  return res.json(query);
};

module.exports = userExists