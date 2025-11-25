const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.post("/", async (req, res) => {
	const { botToken, channelID, messageID } = req.body;
	if ( !botToken || !channelID || !messageID ) {
		return res.status(400).json({"error":"Incomplete Body"})
	}
	try {
		const response = await fetch (`https://discord.com/api/v10/channels/${channelID}/messages/${messageID}`, {
			"method": "GET",
			"headers": {
				"Authorization": `Bot ${botToken}`,
				"Content-Type": "application/json"
			},
		});
		if (!response.ok) {
			const errorResponse = await response.json().catch(() => null);
			return res.status(response.status).json({"error":"Discord API Error","details":errorResponse});
		}
		
		const messageData = await response.json();
		res.status(200).json(messageData);
	} catch {
		res.status(500).json({"error":"Server Error"})
	}
	});
	
module.exports = router;
