const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	const iso = new Date().toISOString();
	res.status(200).json({"timestamp":`${iso}`});
});

module.exports = router;
