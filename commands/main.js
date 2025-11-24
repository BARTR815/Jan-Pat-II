const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;

  res.json({
    message: 'POST received successfully.',
    received: data
  });
});

module.exports = router;
