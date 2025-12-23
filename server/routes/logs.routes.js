const express = require("express");
const router = express.Router();

// ======================
// TEMP STORAGE (in-memory)
// ======================
let logs = [];
let idCounter = 1;

// GLOBAL SCAN MODE (controlled by frontend)
let currentScanMode = "IN";

/* ======================
   GET IN LOGS
====================== */
router.get("/in", (req, res) => {
  res.json(logs.filter(log => log.status === "IN"));
});

/* ======================
   GET OUT LOGS
====================== */
router.get("/out", (req, res) => {
  res.json(logs.filter(log => log.status === "OUT"));
});

/* ======================
   SUMMARY
====================== */
router.get("/summary", (req, res) => {
  const totalEntries = logs.filter(l => l.status === "IN").length;
  const totalExits = logs.filter(l => l.status === "OUT").length;

  res.json({
    totalEntries,
    totalExits,
    totalAttendees: totalEntries - totalExits,
  });
});

/* ======================
   SET SCAN MODE (FROM UI)
====================== */
router.post("/mode", (req, res) => {
  const { mode } = req.body;

  if (!["IN", "OUT"].includes(mode)) {
    return res.status(400).json({ message: "Invalid mode" });
  }

  currentScanMode = mode;
  console.log(`🔁 Scan mode set to ${mode}`);

  res.json({ mode });
});

/* ======================
   RFID SCAN (ARDUINO)
====================== */
router.post("/rfid/scan", (req, res) => {
  const { uid } = req.body;
  if (!uid) {
    return res.status(400).json({ message: "UID required" });
  }

  // Block duplicate logs in same mode
  const lastLog = [...logs].reverse().find(l => l.name === uid);
  if (lastLog && lastLog.status === currentScanMode) {
    return res.status(200).json({ message: "Duplicate ignored" });
  }

  const log = {
    id: idCounter++,
    name: uid,
    status: currentScanMode,
    time: new Date().toLocaleTimeString(),
  };

  logs.push(log);
  console.log(`✅ RFID ${currentScanMode} SAVED:`, log);

  res.status(201).json(log);
});

module.exports = router;
