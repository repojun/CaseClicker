const { updateSpecificMessage, fetchSpecificMessage } = require("../../database/queries/messages");

const setMessageLike = async (req, res) => {
  const { messageID, liked } = req.body;
  if (!messageID) {
    return res.sendStatus(400);
  }
  const query = await fetchSpecificMessage(messageID);

  if (!query) {
    return res.sendStatus(400);
  }

  await updateSpecificMessage(messageID, liked);
  return res.sendStatus(200);

};

module.exports = setMessageLike;