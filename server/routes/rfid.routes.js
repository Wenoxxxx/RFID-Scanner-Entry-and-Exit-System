const express = require("express");
const router = express.Router();

const {
  scanRFID,
  getLogs,
  getSummary
} = require("../services/rfid.service");

// POST: RFID scan
router.post("/scan", (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ error: "UID is required" });
  }

  const log = scanRFID(uid);
  res.status(201).json(log);
});

// GET: all RFID logs
router.get("/logs", (req, res) => {
  res.json(getLogs());
});

// GET: summary
router.get("/summary", (req, res) => {
  res.json(getSummary());
});

module.exports = router;