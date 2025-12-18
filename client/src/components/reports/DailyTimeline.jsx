import './DailyTimeline.css';

export default function DailyTimeline({ logs }) {

  if (logs.length === 0) {
    return (
      <div className="timeline-empty">
        No logs for this date
      </div>
    );
  }

  return (
    <div className="daily-timeline">
      <h4 className="card-title">Daily Timeline</h4>

      <table className="timeline-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.time}</td>
              <td>{log.name}</td>
              <td>
                <span className={`status ${log.status.toLowerCase()}`}>
                  {log.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
