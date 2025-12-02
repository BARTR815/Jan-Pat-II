const express = require("express");
const router = express.Router();
const path = require("path");

const activityIcons = require("./jsonData/activityIcons.json");
const barIcons = require("./jsonData/barIcons.json");
const ranks1 = require("./jsonData/ranks1.json");
const ranks2 = require("./jsonData/ranks2.json");
const ranks3 = require("./jsonData/ranks3.json");
const ranks4 = require("./jsonData/ranks4.json");
const rankRoles = require("./jsonData/rankRoles.json");

const stats = {activityIcons,barIcons,ranks1,ranks2,ranks3,ranks4,rankRoles}

router.post("/", (req, res) => {
	const {jsonData} = req.body
	if (stats[jsonData]) {
		res.status(200).json(stats[jsonData]);
	} else {
		res.status(400).json({"error":"Invalid Request"})
	}
});

module.exports = router;
