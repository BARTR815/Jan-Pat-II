const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2137;

app.use(express.json());

const sendMessage = require("./commands/sendMessage.js");
const editMessage = require("./commands/editMessage.js");
const getMessageData = require("./commands/getMessageData.js");
const jsonParse = require("./commands/jsonParse.js");
const baseDecode = require("./commands/baseDecode.js");
const baseEncode = require("./commands/baseEncode.js");

app.use("/commands/sendMessage", sendMessage);
app.use("/commands/editMessage", editMessage);
app.use("/commands/getMessageData", getMessageData);
app.use("/commands/jsonParse", jsonParse);
app.use("/commands/baseDecode", baseDecode);
app.use("/commands/baseEncode", baseEncode);

app.get("/", (req, res) => {
	res.send(`Jan Pat II - "Created with passion"`);
});

app.listen(PORT, () => console.log(`Molib running on port ${PORT}`));
