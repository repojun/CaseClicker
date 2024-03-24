const { getCookie } = require("../../cookies/get");
const { fetchUser, updateMessages } = require("../../database/queries/users");
const messages = require("../../database/schema/messages");

const setItem = async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);
  const query = await fetchUser(user.id)

  if (!user || !query) {
    return res.sendStatus(400);
  }

  await updateMessages(user.id, user.username, message)
  return res.sendStatus(200);

};

module.exports = setItem;