const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const jsonParse = req.body
	res.status(200).json(jsonParse);
});

module.exports = router;
