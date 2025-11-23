const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

app.post('/send-discord', async (req, res) => {
  const { botToken, channelId, message } = req.body;

  if (!botToken || !channelId || !message) {
    return res.status(400).json({ message: 'botToken, channelId, and message are required' });
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: message })
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Discord API error: ${response.status} - ${text}`);
    }

    res.status(200).json({ message: 'Message sent to Discord!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send message', error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
