const express = require("express");
const router = express.Router();
const jsonController = require("../controllers/json.controller");

router.post("/format", jsonController.formatJson);
router.get("/history", jsonController.getHistory); // Optional Bonus

module.exports = router;
