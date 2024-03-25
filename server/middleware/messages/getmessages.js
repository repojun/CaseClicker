const {fetchMessages} = require("../../database/queries/messages");

const getMessages = async (req, res) => {

  const query = await fetchMessages();

  if (!query) {
    return res.sendStatus(404);
  }

  return res.json(query);
};

module.exports = getMessages;
