const express = require("express");
const cors = require("cors");

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());

// =====================
// ROUTES
// =====================

// Existing logs routes
const logsRoutes = require("./routes/logs.routes");
app.use("/api/logs", logsRoutes);

// NEW: RFID routes
const rfidRoutes = require("./routes/rfid.routes");
app.use("/api/rfid", rfidRoutes);

// =====================
// HEALTH CHECK
// =====================
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// =====================
// SERVER
// =====================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

require("./serial/arduino");