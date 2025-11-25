const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/activity-icon', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'activityIcon.json'));
});

router.get('/bar-icon', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'barIcon.json'));
});

router.get('/rank-1', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'rank1.json'));
});

router.get('/rank-2', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'rank2.json'));
});

router.get('/rank-3', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'rank3.json'));
});

router.get('/rank-4', (req, res) => {
res.sendFile(path.join(__dirname, 'data', 'rank4.json'));
});

module.exports = router;