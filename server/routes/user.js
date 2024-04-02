const express = require("express"),
  router = express.Router();
const userExistsUsername = require("../middleware/user/existsusername");
const userExists = require("../middleware/user/exists");
const setBalance = require("../middleware/user/setbalance");
const setPremiumBalance = require("../middleware/user/setpremiumbalance");
const setPassiveUpgrade = require("../middleware/user/setpassiveupgrade");
const setPassiveUpgradeLevel = require("../middleware/user/setpassiveupgradelevel");
const setProfilePicture = require("../middleware/user/setprofilepicture");
const setNetworth = require("../middleware/user/setnetworth");
const setItem = require("../middleware/user/setitem");
const topTen = require("../middleware/user/topten");
const userposition = require("../middleware/user/userposition");
const getItem = require("../middleware/user/getitem");

router.get("/exists", userExists);
router.get("/topten", topTen);
router.post("/setnetworth", setNetworth)
router.post("/getitem", getItem);
router.post("/userposition", userposition);
router.post("/setprofilepicture", setProfilePicture);
router.post("/username/exists", userExistsUsername);
router.post("/setbalance", setBalance);
router.post("/setpremiumbalance", setPremiumBalance);
router.post("/setpassiveupgrade", setPassiveUpgrade);
router.post("/setpassiveupgradelevel", setPassiveUpgradeLevel);
router.post("/setitem", setItem);

module.exports = router;
