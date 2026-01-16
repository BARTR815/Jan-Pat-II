const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const encode = req.body.content
	decodedContent = atob(decode)
	res.status(200).json(decodedContent);
});

module.exports = router;
