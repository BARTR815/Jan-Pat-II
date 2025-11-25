const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/activity-icon', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'activityIcon.json'));
});

router.get('/bar-icon', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'barIcon.json'));
});

module.exports = router;