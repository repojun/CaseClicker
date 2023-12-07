const mongoose = require("mongoose");

module.exports = mongoose.model(
  // exports allows us to use many functions with schema
  // In the mongoose connection, create a model called "User" with the respective schema
  "Login",
  new mongoose.Schema({
    id: { type: String }, // User ID
    email : { type: String},
    username: { type: String },
    password: { type: String },
  })
);
