const express = require("express"),
  router = express.Router();
const setMessage = require("../middleware/messages/setmessage");
const getMessages = require("../middleware/messages/getmessages");
const setMessageLike = require("../middleware/messages/setmessagelike");

router.get("/getMessages", getMessages);
router.post("/setMessage", setMessage);
router.post("/setmessagelike", setMessageLike)

module.exports = router;
