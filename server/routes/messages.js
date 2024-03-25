const express = require("express"),
  router = express.Router();
const setMessage = require("../middleware/messages/setMessage");

router.post("/setMessage", setMessage);

module.exports = router;
