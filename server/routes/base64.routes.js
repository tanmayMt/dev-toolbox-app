const express = require("express");
const router = express.Router();
const base64Controller = require("../controllers/base64.controller");

router.post("/encode", base64Controller.encodeText);
router.post("/decode", base64Controller.decodeText);

module.exports = router;
