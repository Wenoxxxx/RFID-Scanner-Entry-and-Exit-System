const express = require("express");
const app = express();

const logsRoutes = require("./routes/logs.routes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/logs", logsRoutes);

// Start server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
