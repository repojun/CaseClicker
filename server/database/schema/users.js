const mongoose = require("mongoose");

module.exports = mongoose.model( // exports allows us to use many functions with schema
  // In the mongoose connection, create a model called "User" with the respective schema
  "User",
  new mongoose.Schema({
    id: { type: String }, // User ID
    username: { type: String},
    registeredAt: { type: Number, default: Date.now() },
    balance: { type: Number, default: 0 },
    passiveUpgrades: {
      type: {
        passiveUpgrade1: {
          level: { type: Number, default: 1 },
          value: { type: Number, default: 0 }
        },
        passiveUpgrade2: {
          level: { type: Number, default: 1 },
          value: { type: Number, default: 0 }
        },
        passiveUpgrade3: {
          level: { type: Number, default: 1 },
          value: { type: Number, default: 0 }
        },
        passiveUpgrade4: {
          level: { type: Number, default: 1 },
          value: { type: Number, default: 0 }
        }
      },
      default: {
        passiveUpgrade1: { level: 1, value: 0 },
        passiveUpgrade2: { level: 1, value: 0 },
        passiveUpgrade3: { level: 1, value: 0 },
        passiveUpgrade4: { level: 1, value: 0 }
      }
    }
  })
);
