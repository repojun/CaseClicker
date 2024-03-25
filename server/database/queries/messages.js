const messageSchema = require("../schema/messages"); // import
const userSchema = require("../schema/users"); // import

const fetchMessages = async () => {
  const messages = await messageSchema.find().sort({postedAt: -1}).lean();
  if (!messages?.length) return [];

  const filteredUsers = messages
    .map(({userid}) => userid)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  if (!filteredUsers?.length) return messages;

  const users = await userSchema.find({id: {$in: filteredUsers}});
  if (!users?.length) return messages;

  const usersObject = users.reduce(function (result, user) {
    result[user?.id] = user;
    return result;
  }, {});

  const messagesWithProfilePictures = messages.map((message) => {
    message.profilePicture= usersObject[message?.userid]?.profilePicture;
    return message;
  });

  return messagesWithProfilePictures;
};

const updateMessages = async (userID, username, message) => {
  
  const messageQuery = new messageSchema({ userid: userID, username: username, message: message });
  console.log("MSG:" + messageQuery);
  await messageQuery.save();
};

module.exports = { fetchMessages, updateMessages };
