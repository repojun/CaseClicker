const mongoose = require("mongoose");

module.exports = mongoose.model(
  // exports allows us to use many functions with schema
  // In the mongoose connection, create a model called "User" with the respective schema
  "Messages",
  new mongoose.Schema({
    id: { type: String }, // message ID
    userid: { type: String},
    username : { type: String},
    message: { type: String },
    postedAt: { type: Number, default: Date.now() },
    likes: { type: Number, default: 0 },
    profilePicture: { type: String, default: "/circlepfp.png"},
    replies: {
      replyID: {type: String},
      replyMessage: {type: String},
      likes: {type: Number, default : 0}
    },
  })
);
