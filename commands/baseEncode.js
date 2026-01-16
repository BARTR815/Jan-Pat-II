const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const encode = req.body.content
	encodedContent = atob(encode)
	res.status(200).json(encodedContent);
});

module.exports = router;
