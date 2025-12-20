const sqlite3 = require("sqlite3").verbose();

// Create or open database file
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Failed to connect:", err.message);
  } else {
    console.log("SQLite database connected");
  }
});

// Create table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT,
    name TEXT,
    status TEXT,
    time TEXT
  )
`);

module.exports = db;
