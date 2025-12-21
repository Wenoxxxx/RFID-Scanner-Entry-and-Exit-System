import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

/* LOGS */
import Logs from "./pages/Logs";
import LogsSummary from "./components/logs/LogsSummary";
import LogsIn from "./components/logs/LogsIn";
import LogsOut from "./components/logs/LogsOut";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/logs" element={<Logs />}>
          <Route index element={<LogsSummary />} />
          <Route path="summary" element={<LogsSummary />} />
          <Route path="in" element={<LogsIn />} />
          <Route path="out" element={<LogsOut />} />
        </Route>

        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}
