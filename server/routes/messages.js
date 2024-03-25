const express = require("express"),
  router = express.Router();
const setMessage = require("../middleware/messages/setmessage");
const getMessages = require("../middleware/messages/getmessages");

router.get("/getMessages", getMessages);
router.post("/setMessage", setMessage);

module.exports = router;
