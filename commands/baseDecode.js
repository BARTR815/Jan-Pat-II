const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const {content} = req.body;
	const decodedContent = atob(content);
	res.status(200).json({content:`${decodedContent}`});
});

module.exports = router;
