const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', async (req, res) => {
  const { botToken, channelID } = req.body;

  if (!botToken || !channelID) return res.sendStatus(400);

  try {
    await fetch(`https://discord.com/api/v10/channels/${channelID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: "Hello World!", // hardcoded message
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                label: "Click me",
                style: 1,
                custom_id: "button_1"
              }
            ]
          }
        ]
      })
    });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
