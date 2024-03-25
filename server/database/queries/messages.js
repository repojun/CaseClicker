const messageSchema = require("../schema/messages"); // import
const userSchema = require("../schema/users"); // import

const fetchMessages = async () => {
  const messages = await messageSchema.find().sort({ postedAt: -1 }).lean();
  return messages;
};

const updateMessages = async (userID, username, message) => {
  const messageQuery = new messageSchema({ userID: userID, username: username, message: message });
  await messageQuery.save();
};

module.exports = { fetchMessages, updateMessages };
