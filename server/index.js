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
const logsRoutes = require("./routes/logs.routes");
app.use("/api/logs", logsRoutes);

// =====================
// HEALTH CHECK
// =====================
app.get("/health", (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});

// =====================
// SERVER
// =====================
const PORT = 3000;
app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Express API is running");
  console.log(`📡 http://localhost:${PORT}`);
  console.log("=================================");
});
