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
    profilePicture: { type: String, default: "/defaultpfp.png"},
    inventory: {
      glock_fade: {
        viewname: { type: String, default: "Glock - Fade"},
        entname: { type: String, default: "glock_fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/glock_fade.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}
      },
      ak_asiimov: {
        viewname: {type: String, default: "AK47 - Asiimov"},
        entname: { type: String, default: "ak_asiimov"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/ak_asiimov.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}

      },
      ak_firstclass: {
        viewname: {type: String, default: "AK47 - First Class"},
        entname: { type: String, default: "ak_firstclass"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/ak_firstclass.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      ak_icecoaled: {
        viewname: {type: String, default: "AK47 - Ice Coaled"},
        entname: { type: String, default: "ak_icecoaled"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/ak_icecoaled.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Rare"}

      },
      ak_redlaminate: {
        viewname: {type: String, default: "AK47 - Red Laminate"},
        entname: { type: String, default: "ak_redlaminate"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/ak_redlaminate.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      ak_safarimesh: {
        viewname: {type: String, default: "AK47 - Safari Mesh"},
        entname: { type: String, default: "ak_safarimesh"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/ak_safarimesh.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}
      },
      awp_aetheris: {
        viewname: {type: String, default: "AWP - Aetheris"},
        entname: { type: String, default: "awp_aetheris"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/awp_aetheris.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      awp_boom: {
        viewname: {type: String, default: "AWP - Boom"},
        entname: { type: String, default: "awp_boom"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/awp_boom.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      awp_fade: {
        viewname: {type: String, default: "AWP - Fade"},
        entname: { type: String, default: "awp_fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/awp_fade.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}
      },
      awp_redline: {
        viewname: {type: String, default: "AWP - Redline"},
        entname: { type: String, default: "awp_redline"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/awp_redline.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      awp_safarimesh: {
        viewname: {type: String, default: "AWP - Safari Mesh"},
        entname: { type: String, default: "awp_safarimesh"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/awp_safarimesh.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      awp_suninleo: {
        viewname: {type: String, default: "AWP - Sun in leo"},
        entname: { type: String, default: "awp_suninleo"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/awp_suninleo.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      deagle_cobalt: {
        viewname: {type: String, default: "Deagle - Cobalt"},
        entname: { type: String, default: "deagle_cobalt"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/deagle_cobalt.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}

      },
      deagle_codered: {
        viewname: {type: String, default: "Deagle - Code Red"},
        entname: { type: String, default: "deagle_codered"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/deagle_codered.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}

      },
      deagle_conspiracy: {
        viewname: {type: String, default: "Deagle - Conspiracy"},
        entname: { type: String, default: "deagle_conspiracy"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/deagle_conspiracy.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      deagle_kumicho: {
        viewname: {type: String, default: "Deagle - Kumicho"},
        entname: { type: String, default: "deagle_kumicho"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/deagle_kumicho.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Rare"}
      },
      deagle_mudder: {
        viewname: {type: String, default: "Deagle - Mudder"},
        entname: { type: String, default: "deagle_mudder"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/deagle_mudder.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      glock_candyapple: {
        viewname: {type: String, default: "Glock - Candy Apple"},
        entname: { type: String, default: "glock_candyapple"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/glock_candyapple.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      glock_neonoir: {
        viewname: {type: String, default: "Glock - Neo Noir"},
        entname: { type: String, default: "glock_neonoirs"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/glock_neonoir.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Rare"}

      },
      glock_reach: {
        viewname: {type: String, default: "Glock - Reach"},
        entname: { type: String, default: "glock_reach"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/glock_reach.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      glock_sanddune: {
        viewname: {type: String, default: "Glock - Sand Dune"},
        entname: { type: String, default: "glock_sanddune"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/glock_sanddune.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      mp7_bloodsport: {
        viewname: {type: String, default: "MP7 - Bloodsport"},
        entname: { type: String, default: "mp7_bloodsport"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/mp7_bloodsport.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Rare"}

      },
      mp7_fade: {
        viewname: {type: String, default: "MP7 - Fade"},
        entname: { type: String, default: "mp7_fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/mp7_fade.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}

      },
      mp7_groundwater: {
        viewname: {type: String, default: "MP7 - Groundwater"},
        entname: { type: String, default: "mp7_groundwater"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/mp7_groundwater.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      mp7_gunsmoke: {
        viewname: {type: String, default: "MP7 - Gunsmoke"},
        entname: { type: String, default: "mp7_gunsmoke"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/mp7_gunsmoke.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      scar20_carbon: {
        viewname: {type: String, default: "Scar20 - Carbon"},
        entname: { type: String, default: "scar20_carbon"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/scar20_carbon.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}
      },
      scar20_emerald: {
        viewname: {type: String, default: "Scar20 - Emerald"},
        entname: { type: String, default: "scar20_emerald"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/scar20_emerald.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Rare"}

      },
      scar20_torn: {
        viewname: {type: String, default: "Scar20 - Torn"},
        entname: { type: String, default: "scar20_torn"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/scar20_torn.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      ump_fade: {
        viewname: {type: String, default: "UMP45 - Fade"},
        entname: { type: String, default: "ump_fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/ump_fade.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}

      },
      usp_desert: {
        viewname: {type: String, default: "USP - Desert"},
        entname: { type: String, default: "usp_desert"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/usp_desert.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      usp_guardian: {
        viewname: {type: String, default: "USP - Guardian"},
        entname: { type: String, default: "usp_guardian"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/usp_guardian.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      usp_labrynth: {
        viewname: {type: String, default: "USP - Labrynth"},
        entname: { type: String, default: "usp_labrynth"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/usp_labrynth.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Common"}

      },
      usp_neonoir: {
        viewname: {type: String, default: "USP - Neo Noir"},
        entname: { type: String, default: "usp_neonoir"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/usp_neonoir.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Rare"}

      },
      usp_printstream: {
        viewname: {type: String, default: "USP - Printstream"},
        entname: { type: String, default: "usp_printstream"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/usp_printstream.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Ultra Rare"}
      },
      usp_stainless: {
        viewname: {type: String, default: "USP - Stainless"},
        entname: { type: String, default: "usp_stainless"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/usp_stainless.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Uncommon"}
      },
      karambit_fade: {
        viewname: {type: String, default: "Karambit - Fade"},
        entname: { type: String, default: "karambit_fade"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/skins/karambit_fade.png"},
        purchasable: { type: Number, default: 0},
        rarity: {type: String, default: "Contraband"}
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
        purchasable: { type: Number, default: 1},
        entname: {type: String, default: "brokenfang"}
      },
      case_dreams: {
        viewname: { type: String, default: "Dream Case"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/dreamnightmaresnew.png"},
        purchasable: { type: Number, default: 1},
        entname: { type: String, default: "dream"}
      },
      case_contenders: {
        viewname: { type: String, default: "Sticker Capsule"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/stockholmcontenders.png"},
        purchasable: { type: Number, default: 1},
        entname: { type: String, default: "themecapsule"}
      },
      case_dust: {
        viewname: { type: String, default: "Souvenir Package"},
        value: { type: Number, default: 0 },
        price: { type: Number, default: 1.90 },
        image: { type: String, default: "/stockholmdust.png"},
        purchasable: { type: Number, default: 1},
        entname: { type: String, default: "powerup"}

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
