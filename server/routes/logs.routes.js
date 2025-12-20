const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/", (req, res) => {
  db.all("SELECT * FROM logs", [], (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(rows);
    }
  });
});


router.post("/", (req, res) => {
  const { user, name, status, time } = req.body;

  db.run(
    "INSERT INTO logs (user, name, status, time) VALUES (?, ?, ?, ?)",
    [user, name, status, time],
    function (err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});


router.put("/:id", (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  db.run(
    "UPDATE logs SET status = ? WHERE id = ?",
    [status, id],
    function (err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json({ updated: this.changes });
      }
    }
  );
});


router.delete("/:id", (req, res) => {
  db.run(
    "DELETE FROM logs WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json({ deleted: this.changes });
      }
    }
  );
});


module.exports = router;
