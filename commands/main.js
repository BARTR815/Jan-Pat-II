const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;

  // for now just send back the data you received
  res.json({
    message: 'POST received successfully.',
    received: data
  });
});

module.exports = router;
