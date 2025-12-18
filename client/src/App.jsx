import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}
