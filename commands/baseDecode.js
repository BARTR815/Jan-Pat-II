const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const decode = req.body.content
	const decodedContent = btoa(decode);
	res.status(200).json({content:`${decodedContent}`});
});

module.exports = router;
