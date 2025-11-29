const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/activity-icon", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "activityIcon.json"));
});
router.get("/bar-icon", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "barIcon.json"));
});

router.get("/rank-section-1", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "rank1.json"));
});
router.get("/rank-section-2", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "rank2.json"));
});
router.get("/rank-section-3", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "rank3.json"));
});
router.get("/rank-section-4", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "rank4.json"));
});

router.get("/rank-role", (req, res) => {
 res.sendFile(path.join(__dirname, "data", "rankRole.json"));
});

module.exports = router;
