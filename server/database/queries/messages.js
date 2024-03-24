const messageSchema = require("../schema/messages"); // import

const fetchMessages = async () => {
  const messages = await messageSchema
    .find({
      id: { $gt: 0 },
    })
    .sort({ id: -1 })
    .lean();

  return messages;
};

module.exports = {fetchMessages}