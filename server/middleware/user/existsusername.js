const { fetchUserByName } = require("../../database/queries/users");

const userExistsUsername = async (req, res) => {
  const username = req.body;
  if (!username) {
    return res.sendStatus(404);
  }

  const query = await fetchUserByName(username);
  if (!query) {
    return res.sendStatus(404);
  }
  return res.json(query.id);
};

module.exports = userExistsUsername;
