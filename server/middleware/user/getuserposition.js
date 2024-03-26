const { getUserPosition } = require("../../database/queries/users");

const topTen = async (req, res) => {

  const query = await getUserPosition();

  if (!query) {
    return res.sendStatus(404);
  }
  return query;
};

module.exports = getUserPosition;