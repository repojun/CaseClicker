const { getCookie } = require("../../cookies/get");
const { fetchUser, updateUserNetworth } = require("../../database/queries/users");

const setNetworth = async (req, res) => {
  const { networth } = req.body;
  if (!networth) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);

  const query = await fetchUser(user.id)
  if (!user || !query) {
    return res.sendStatus(404);
  }
  await updateUserNetworth(user.id, networth)
  return res.sendStatus(200);
};

module.exports = setNetworth;