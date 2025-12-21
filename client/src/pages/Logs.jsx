import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Logs.css";

export default function Logs() {
  const location = useLocation();

  // Determine current view from URL
  const currentView = location.pathname.endsWith("/in")
    ? "IN"
    : location.pathname.endsWith("/out")
    ? "OUT"
    : "SUMMARY";

  return (
    <div className="card">
      <h1>Logs</h1>
      <p className="subtitle">Timeline scanner logs</p>

      {/* ✅ NON-CLICKABLE STATUS LABEL */}
      <p className={`logs-filter-label ${currentView.toLowerCase()}`}>
        SHOWING: {currentView} LOGS
      </p>

      {/* ACTION BAR */}
      <div className="logs-actions">
        <div className="scan-actions">
          <NavLink
            to="in"
            className={({ isActive }) =>
              `btn-scan in ${isActive ? "active" : ""}`
            }
          >
            Scan IN
          </NavLink>

          <NavLink
            to="out"
            className={({ isActive }) =>
              `btn-scan out ${isActive ? "active" : ""}`
            }
          >
            Scan OUT
          </NavLink>
        </div>

        <NavLink
          to="summary"
          className={({ isActive }) =>
            `btn-summary ${isActive ? "active" : ""}`
          }
        >
          Summary
        </NavLink>
      </div>

      {/* CHILD ROUTES */}
      <Outlet />
    </div>
  );
}
