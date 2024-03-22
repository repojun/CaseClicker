const express = require("express"),
  router = express.Router();

const userExists = require("../middleware/user/exists");
const setBalance = require("../middleware/user/setbalance");
const setPremiumBalance = require("../middleware/user/setpremiumbalance");
const setPassiveUpgrade = require("../middleware/user/setpassiveupgrade");
const setPassiveUpgradeLevel = require("../middleware/user/setpassiveupgradelevel");
const setItem = require("../middleware/user/setitem");

const { getCookie } = require("../cookies/get");
const { fetchUser, updateUserBalance, updateUserPassiveUpgrade, updateUserPassiveUpgradeLevel, updateUserPremiumBalance, updateUserInventory } = require("../database/queries/users");

router.get("/exists", userExists);
router.post("/setbalance", setBalance);
router.post("/setpremiumbalance", setPremiumBalance);
router.post("/setpassiveupgrade", setPassiveUpgrade);
router.post("/setpassiveupgradelevel", setPassiveUpgradeLevel);
router.post("/setitem", setItem);




module.exports = router;