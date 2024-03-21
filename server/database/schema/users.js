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
        image: { type: String, default: "skins/glockfade.png"},
        purchasable: { type: Number, default: 0}
      },
      ak_asiimov: {
        viewname: {type: String, default: "AK47 - Asiimov"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/ak_asiimov.png"},
        purchasable: { type: Number, default: 0}
      },
      ak_firstclass: {
        viewname: {type: String, default: "AK47 - First Class"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/ak_firstclass.png"},
        purchasable: { type: Number, default: 0}
      },
      ak_icecoaled: {
        viewname: {type: String, default: "AK47 - Ice Coaled"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/ak_icecoaled.png"},
        purchasable: { type: Number, default: 0}
      },
      ak_redlaminate: {
        viewname: {type: String, default: "AK47 - Red Laminate"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/ak_redlaminate.png"},
        purchasable: { type: Number, default: 0}
      },
      ak_safarimesh: {
        viewname: {type: String, default: "AK47 - Safari Mesh"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/ak_safarimesh.png"},
        purchasable: { type: Number, default: 0}
      },
      awp_aetheris: {
        viewname: {type: String, default: "AWP - Aetheris"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/awp_aetheris"},
        purchasable: { type: Number, default: 0}
      },
      awp_boom: {
        viewname: {type: String, default: "AWP - Boom"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/awp_boom"},
        purchasable: { type: Number, default: 0}
      },
      awp_fade: {
        viewname: {type: String, default: "AWP - Fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/awp_fade"},
        purchasable: { type: Number, default: 0}
      },
      awp_redline: {
        viewname: {type: String, default: "AWP - Redline"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/awp_redline"},
        purchasable: { type: Number, default: 0}
      },
      awp_safarimesh: {
        viewname: {type: String, default: "AWP - Safari Mesh"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/awp_safarimesh"},
        purchasable: { type: Number, default: 0}
      },
      awp_suninleo: {
        viewname: {type: String, default: "AWP - Sun in leo"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/awp_suninleo"},
        purchasable: { type: Number, default: 0}
      },
      deagle_cobalt: {
        viewname: {type: String, default: "Deagle - Cobalt"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/deagle_cobalt"},
        purchasable: { type: Number, default: 0}
      },
      deagle_codered: {
        viewname: {type: String, default: "Deagle - Code Red"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/deagle_codered"},
        purchasable: { type: Number, default: 0}
      },
      deagle_conspiracy: {
        viewname: {type: String, default: "Deagle - Conspiracy"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/deagle_conspiracy"},
        purchasable: { type: Number, default: 0}
      },
      deagle_kumicho: {
        viewname: {type: String, default: "Deagle - Kumicho"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/deagle_kumicho"},
        purchasable: { type: Number, default: 0}
      },
      deagle_mudder: {
        viewname: {type: String, default: "Deagle - Mudder"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/deagle_mudder"},
        purchasable: { type: Number, default: 0}
      },
      glock_candyapple: {
        viewname: {type: String, default: "Glock - Candy Apple"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/glock_candyapple"},
        purchasable: { type: Number, default: 0}
      },
      glock_neonoir: {
        viewname: {type: String, default: "Glock - Neo Noir"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/glock_neonoir"},
        purchasable: { type: Number, default: 0}
      },
      glock_reach: {
        viewname: {type: String, default: "Glock - Reach"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/glock_reach"},
        purchasable: { type: Number, default: 0}
      },
      glock_sanddune: {
        viewname: {type: String, default: "Glock - Sand Dune"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/glock_candyapple"},
        purchasable: { type: Number, default: 0}
      },
      mp7_bloodsport: {
        viewname: {type: String, default: "MP7 - Bloodsport"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/mp7_bloodsport"},
        purchasable: { type: Number, default: 0}
      },
      mp7_fade: {
        viewname: {type: String, default: "MP7 - Fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/mp7_fade"},
        purchasable: { type: Number, default: 0}
      },
      mp7_groundwater: {
        viewname: {type: String, default: "MP7 - Groundwater"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/mp7_groundwater"},
        purchasable: { type: Number, default: 0}
      },
      mp7_gunsmoke: {
        viewname: {type: String, default: "MP7 - Gunsmoke"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/mp7_gunsmoke"},
        purchasable: { type: Number, default: 0}
      },
      scar20_carbon: {
        viewname: {type: String, default: "Scar20 - Carbon"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/scar20_carbon"},
        purchasable: { type: Number, default: 0}
      },
      scar20_emerald: {
        viewname: {type: String, default: "Scar20 - Emerald"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/scar20_emerald"},
        purchasable: { type: Number, default: 0}
      },
      scar20_torn: {
        viewname: {type: String, default: "Scar20 - Torn"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/scar20_torn"},
        purchasable: { type: Number, default: 0}
      },
      ump_fade: {
        viewname: {type: String, default: "UMP45 - Fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/ump_fade"},
        purchasable: { type: Number, default: 0}
      },
      usp_desert: {
        viewname: {type: String, default: "USP - Desert"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/usp_desert"},
        purchasable: { type: Number, default: 0}
      },
      usp_guardian: {
        viewname: {type: String, default: "USP - Guardian"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/usp_guardian"},
        purchasable: { type: Number, default: 0}
      },
      usp_labrynth: {
        viewname: {type: String, default: "USP - Labrynth"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/usp_labrynth"},
        purchasable: { type: Number, default: 0}
      },
      usp_neonoir: {
        viewname: {type: String, default: "USP - Neo Noir"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/usp_neonoir"},
        purchasable: { type: Number, default: 0}
      },
      usp_printstream: {
        viewname: {type: String, default: "USP - Printstream"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/usp_printstream"},
        purchasable: { type: Number, default: 0}
      },
      usp_stainless: {
        viewname: {type: String, default: "USP - Stainless"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "skins/usp_stainless"},
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
        purchasable: { type: Number, default: 1},
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
