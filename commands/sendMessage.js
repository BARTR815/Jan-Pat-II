const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', async (req, res) => {
  const { botToken, channelID, body } = req.body;

  if (!botToken || !channelID || !body) return res.sendStatus(400);

  try {
    await fetch(`https://discord.com/api/v10/channels/${channelID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
