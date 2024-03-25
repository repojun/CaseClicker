const { getCookie } = require("../../cookies/get");
const { updateMessages } = require("../../database/queries/messages");
const { fetchUser } = require("../../database/queries/users");

const setMessage = async (req, res) => {
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

module.exports = setMessage;