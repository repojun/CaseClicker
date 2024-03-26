const { getUserPosition, fetchUser } = require("../../database/queries/users");
const { getCookie } = require("../../cookies/get");

const userposition = async (req, res) => {
  const { userID } = req.body;
  console.log("USER ID: " + userID);
  try { 
    const position = await getUserPosition(userID);

    if (!position) {
      return res.sendStatus(404);
    }

    return res.json(position);
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = userposition;