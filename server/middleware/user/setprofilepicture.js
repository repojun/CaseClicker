const { getCookie } = require("../../cookies/get");
const { fetchUser, updateUserProfilePicture } = require("../../database/queries/users");

const setProfilePicture = async (req, res) => {
  const { profilePicture } = req.body;
  
  const user = getCookie(req.cookies, "user_cookie", true);

  const query = await fetchUser(user.id)
  if (!user || !query) {
    return res.sendStatus(404);
  }

  if (!profilePicture) {
    await updateUserProfilePicture(user.id, "/defaultpfp.png")
  }

  await updateUserProfilePicture(user.id, profilePicture)
  return res.sendStatus(200);
};

module.exports = setProfilePicture;