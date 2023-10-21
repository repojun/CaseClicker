const mongoose = require("mongoose");

module.exports = mongoose.model( // exports allows us to use many functions with schema
  // In the mongoose connection, create a model called "User" with the respective schema
  "User",
  new mongoose.Schema({
    id: { type: String }, // User ID
    username: { type: String},
    registeredAt: { type: Number, default: Date.now() },
    balance: { type: Number, default: 0 },
  })
);
