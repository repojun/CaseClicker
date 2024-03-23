const { fetchTopTen } = require("../../database/queries/users");

const topTen = async (req, res) => {

  const query = await fetchTopTen();

  if (!query) {
    return res.sendStatus(404);
  }
  return res.json(query);
};
module.exports = topTen;