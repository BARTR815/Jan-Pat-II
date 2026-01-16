const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const {content} = req.body;
	const encodedContent = btoa(content);
	res.status(200).json({content:`${encodedContent}`});
});

module.exports = router;
