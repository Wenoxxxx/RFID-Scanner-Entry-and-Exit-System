const express = require("express");
const router = express.Router();

/*
 TEMP DATA (for learning)
 Later we replace this with a database
*/
let logs = [];

/* ======================
   GET IN LOGS
====================== */
router.get("/in", (req, res) => {
  const inLogs = logs.filter(log => log.status === "IN");
  res.json(inLogs);
});

/* ======================
   GET OUT LOGS
====================== */
router.get("/out", (req, res) => {
  const outLogs = logs.filter(log => log.status === "OUT");
  res.json(outLogs);
});

/* ======================
   GET SUMMARY
====================== */
router.get("/summary", (req, res) => {
  const totalEntries = logs.filter(l => l.status === "IN").length;
  const totalExits = logs.filter(l => l.status === "OUT").length;

  res.json({
    totalEntries,
    totalExits,
    totalAttendees: totalEntries - totalExits
  });
});

/* ======================
   ADD LOG (SCAN)
====================== */
router.post("/", (req, res) => {
  const { name, status } = req.body;

  const newLog = {
    id: logs.length + 1,
    name,
    status,
    time: new Date().toLocaleTimeString()
  };

  logs.push(newLog);
  res.status(201).json(newLog);
});

module.exports = router;
