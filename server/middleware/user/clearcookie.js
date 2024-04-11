const { getCookie } = require("../../cookies/get");

const clearCookie = async (req, res) => {
  const user = getCookie(req.cookies, "user_cookie", true);
  if (!user) {
    return res.sendStatus(200);
  }

  res.clearCookie("user_cookie");
  return res.sendStatus(200)
};

module.exports = clearCookie