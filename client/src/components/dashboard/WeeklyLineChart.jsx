import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// same data you already use on Dashboard
const weeklyData = [
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
    <div className="chart-wrapper weekly-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={weeklyData}>
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
  );
}
