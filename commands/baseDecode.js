const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const encode = req.body.content
	decodedContent = btoa(decode)
	res.status(200).json(decodedContent);
});

module.exports = router;
