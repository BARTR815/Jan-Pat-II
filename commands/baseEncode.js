const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const encode = req.body.content
	const encodedContent = btoa(encode);
	res.status(200).json({content:`${encodedContent}`});
});

module.exports = router;
