const mongoose = require("mongoose");

module.exports = mongoose.model(
  // exports allows us to use many functions with schema
  // In the mongoose connection, create a model called "User" with the respective schema
  "Messages",
  new mongoose.Schema({
    id: { type: String }, // message ID
    username : { type: String},
    message: { type: String },
    likes: { type: Number, default: 0 },
    replies: {
      replyID: {type: String},
      replyMessage: {type: String},
      likes: {type: Number, default : 0}
    },
  })
);
