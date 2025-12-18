import './DashboardLineChart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Dummy data pani, butang data later relate sa logs
const data = [
  { day: "Mon", Total: 120 },
  { day: "Tue", Total: 210 },
  { day: "Wed", Total: 180 },
  { day: "Thu", Total: 260 },
  { day: "Fri", Total: 300 },
  { day: "Sat", Total: 220 },
  { day: "Sun", Total: 150 },
];

export default function WeeklyLineChart() {
  return (
    <div className="chart-card">
      <h4 className="card-title">Weekly Activity</h4>

      <div className="chart-wrapper">
        
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Total"
              stroke="#5b5be0"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}
