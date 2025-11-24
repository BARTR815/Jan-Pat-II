const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const sendMessage = require('./commands/sendMessage.js');
const editMessage = require('./commands/editMessage.js');
const getData = require('./jsonData/getData.js');

app.use('/commands/send-message', sendMessage);
app.use('/commands/edit-message', editMessage);
app.use('/json-data/get-data', getData);

app.get('/', (req, res) => {
  res.send('JP2');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
