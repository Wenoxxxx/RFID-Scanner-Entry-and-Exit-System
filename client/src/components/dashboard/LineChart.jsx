import './LineChart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", entries: 120 },
  { day: "Tue", entries: 210 },
  { day: "Wed", entries: 180 },
  { day: "Thu", entries: 260 },
  { day: "Fri", entries: 300 },
  { day: "Sat", entries: 220 },
  { day: "Sun", entries: 150 },
];

export default function yLineChart() {
  return (
    <div className="card chart-card">
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
              dataKey="entries"
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
