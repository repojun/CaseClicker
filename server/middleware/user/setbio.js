const { getCookie } = require("../../cookies/get");
const { fetchUser, updateUserBio, } = require("../../database/queries/users");

const setBio = async (req, res) => {
  const { bio } = req.body;
  if (!bio) {
    return res.sendStatus(400);
  }
  const user = getCookie(req.cookies, "user_cookie", true);

  const query = await fetchUser(user.id)
  if (!user || !query) {
    return res.sendStatus(404);
  }
  await updateUserBio(user.id, bio)
  return res.sendStatus(200);
};

module.exports = setBio;