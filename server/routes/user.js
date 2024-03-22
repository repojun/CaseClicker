const express = require("express"),
  router = express.Router();
const userExistsUsername = require("../middleware/user/existsusername")
const userExists = require("../middleware/user/exists");
const setBalance = require("../middleware/user/setbalance");
const setPremiumBalance = require("../middleware/user/setpremiumbalance");
const setPassiveUpgrade = require("../middleware/user/setpassiveupgrade");
const setPassiveUpgradeLevel = require("../middleware/user/setpassiveupgradelevel");
const setItem = require("../middleware/user/setitem");

router.get("/exists", userExists);
router.get("/existsusername", userExistsUsername);
router.post("/setbalance", setBalance);
router.post("/setpremiumbalance", setPremiumBalance);
router.post("/setpassiveupgrade", setPassiveUpgrade);
router.post("/setpassiveupgradelevel", setPassiveUpgradeLevel);
router.post("/setitem", setItem);

module.exports = router;
