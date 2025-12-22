// Temporary in-memory storage
let logs = [];
let activeUsers = new Set();

function scanRFID(uid) {
  const time = new Date().toLocaleTimeString();

  // If user is NOT inside → IN
  if (!activeUsers.has(uid)) {
    activeUsers.add(uid);

    const log = {
      id: logs.length + 1,
      uid,
      status: "IN",
      time
    };

    logs.push(log);
    return log;
  }

  // If user IS inside → OUT
  activeUsers.delete(uid);

  const log = {
    id: logs.length + 1,
    uid,
    status: "OUT",
    time
  };

  logs.push(log);
  return log;
}

function getLogs() {
  return logs;
}

function getSummary() {
  return {
    totalEntries: logs.filter(l => l.status === "IN").length,
    totalExits: logs.filter(l => l.status === "OUT").length,
    totalAttendees: activeUsers.size
  };
}

module.exports = {
  scanRFID,
  getLogs,
  getSummary
};
