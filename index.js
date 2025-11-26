const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const latestCommit = process.env.RENDER_GIT_COMMIT?.slice(0, 7);
const app = express();
const PORT = process.env.PORT || 2137;

app.use(express.json());

const sendMessage = require("./commands/sendMessage.js");
const editMessage = require("./commands/editMessage.js");
const getMessageData = require("./commands/getMessageData.js");
const jsonParse = require("./commands/jsonParse.js");
const getData = require("./jsonData/getData.js");

app.use("/commands/send-message", sendMessage);
app.use("/commands/edit-message", editMessage);
app.use("/commands/get-message-data", getMessageData);
app.use("/commands/json-parse", jsonParse);
app.use("/json-data/get-data", getData);

app.get("/", (req, res) => {
	res.send(`Jan Pat II - "Created with passion" | 
	Latest Commit: ${latestCommit}`);
});

app.listen(PORT, () => console.log(`Molib running on port ${PORT}`));
