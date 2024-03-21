const mongoose = require("mongoose");

module.exports = mongoose.model( // exports allows us to use many functions with schema
  // In the mongoose connection, create a model called "User" with the respective schema
  "User",
  new mongoose.Schema({
    id: { type: String }, // User ID
    username: { type: String },
    registeredAt: { type: Number, default: Date.now() },
    balance: { type: Number, default: 0 },
    premiumBalance: { type: Number, default: 0 },
    inventory: {
      glock_fade: {
        viewname: { type: String, default: "Glock - Fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/glockfade.png"},
        purchasable: { type: Number, default: 0}
      },
      forze_holo: {
        viewname: { type: String, default: "Forze (Holo)"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/forzeholo.png"},
        purchasable: { type: Number, default: 0}
      },
      skin_test3: {
        viewname: { type: String, default: "Unknown Skin"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/recoilcasenew.png"},
        purchasable: { type: Number, default: 1}
      },
      case_recoil: {
        viewname: { type: String, default: "Recoil Case"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/recoilcasenew.png"},
        purchasable: { type: Number, default: 1}
      },
      case_brokenfang: {
        viewname: { type: String, default: "Broken Fang Case"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/brokenfangnew.png"},
        purchasable: { type: Number, default: 1}
      },
      case_dreams: {
        viewname: { type: String, default: "Dream Case"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/dreamnightmaresnew.png"},
        purchasable: { type: Number, default: 1}
      },
      case_contenders: {
        viewname: { type: String, default: "Sticker Capsule"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/stockholmcontenders.png"},
        purchasable: { type: Number, default: 1}
      },
      case_dust: {
        viewname: { type: String, default: "Souvenir Package"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/stockholmdust.png"},
        purchasable: { type: Number, default: 1}
      },
      case_unknown: {
        viewname: { type: String, default: "Unknown Case #2"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/recoilcasenew.png"},
        purchasable: { type: Number, default: 0}
      },
    },
    passiveUpgrades: {
      passiveUpgrade1: {
        level: { type: Number, default: 0 },
        value: { type: Number, default: 0 }
      },
      passiveUpgrade2: {
        level: { type: Number, default: 0 },
        value: { type: Number, default: 0 }
      },
      passiveUpgrade3: {
        level: { type: Number, default: 0 },
        value: { type: Number, default: 0 }
      },
      passiveUpgrade4: {
        level: { type: Number, default: 0 },
        value: { type: Number, default: 0 }
      }
    }
  })
);
