import './DailySummary.css';

export default function DailySummary({ logs, date }) {

  if (logs.length === 0) {
    return (
      <div className="summary-empty">
        No activity for {date}
      </div>
    );
  }

  const sortedLogs = [...logs].sort((a, b) =>
    a.time.localeCompare(b.time)
  );

  const firstEntry = sortedLogs.find(l => l.status === "IN");
  const lastExit = [...sortedLogs].reverse().find(l => l.status === "OUT");

  const totalLogs = logs.length;

  return (
    <div className="daily-summary">
      <h4 className="card-title">Daily Summary</h4>

      <ul className="summary-list">
        <li>
          <span>First Entry</span>
          <strong>{firstEntry ? firstEntry.time : "—"}</strong>
        </li>

        <li>
          <span>Last Exit</span>
          <strong>{lastExit ? lastExit.time : "—"}</strong>
        </li>

        <li>
          <span>Total Logs</span>
          <strong>{totalLogs}</strong>
        </li>
      </ul>
    </div>
  );
}
