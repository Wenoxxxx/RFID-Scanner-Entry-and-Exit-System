import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

import WeeklyLineChart from "../components/dashboard/WeeklyLineChart";
import DailySummary from "../components/reports/DailySummary";
import DailyTimeline from "../components/reports/DailyTimeline";

import "./Reports.css";

const logs = [
  { name: "John Doe", time: "08:01", status: "IN", date: "2025-12-17" },
  { name: "John Doe", time: "17:10", status: "OUT", date: "2025-12-17" }
];

export default function Reports() {
  const [date, setDate] = useState("2025-12-17");

  const filteredLogs = logs.filter(log => log.date === date);

  const totalEntries = filteredLogs.filter(l => l.status === "IN").length;
  const totalExits = filteredLogs.filter(l => l.status === "OUT").length;
  const totalAttendees = new Set(filteredLogs.map(l => l.name)).size;

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("EELS Daily Report", 14, 15);
    doc.text(`Date: ${date}`, 14, 25);

    doc.autoTable({
      startY: 35,
      head: [["Name", "Time", "Status"]],
      body: filteredLogs.map(l => [l.name, l.time, l.status])
    });

    doc.save(`EELS_Report_${date}.pdf`);
  };

  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="stats-header">
        <div>
          <h1>Reports</h1>
          <p className="subtitle">Historical data & export</p>
        </div>

        <div className="stats-controls">
          <input
            type="date"
            className="date-input"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <button className="btn-eels" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
      </div>

      {/* DATE SUMMARY (TOP CARDS) */}
      <div className="date-summary">
        <p className="selected-date">
          Selected Date: <strong>{date}</strong>
        </p>

        <div className="stats-grid">
          <div className="stat-card green">
            <p>Total Entries</p>
            <h3>{totalEntries}</h3>
          </div>

          <div className="stat-card orange">
            <p>Total Exits</p>
            <h3>{totalExits}</h3>
          </div>

          <div className="stat-card purple">
            <p>Total Attendees</p>
            <h3>{totalAttendees}</h3>
          </div>
        </div>
      </div>

      {/* WEEKLY + DAILY SUMMARY */}
      <div className="reports-grid">

        <div className="report-card">
          <h4 className="card-title">Weekly Activity Overview</h4>
          <WeeklyLineChart />
        </div>

        <div className="report-card">
          <DailySummary logs={filteredLogs} date={date} />
        </div>

      </div>

      {/* DAILY TIMELINE */}
      <div className="report-card full-width">
        <DailyTimeline logs={filteredLogs} />
      </div>

    </div>
  );
}
