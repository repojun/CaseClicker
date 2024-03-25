const messageSchema = require("../schema/messages"); // import
const userSchema = require("../schema/users"); // import

const fetchMessages = async () => {
  const messages = await messageSchema.find().sort({ postedAt: -1 }).lean();

  const messagesWithProfilePictures = await Promise.all(
    messages.map(async (message) => {
      const user = await userSchema.findOne({ id: message.userid });
      if (user) {
        message.profilePicture = user.profilePicture;
      }
    })
  );
  return messagesWithProfilePictures;
};

const updateMessages = async (userID, username, message) => {
  const messageQuery = new messageSchema({ userID: userID, username: username, message: message });
  await messageQuery.save();
};

module.exports = { fetchMessages, updateMessages };
