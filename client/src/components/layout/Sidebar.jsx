import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">EELS</h2>

      <nav>
        <NavLink to="/" end className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/logs" className="nav-link">
          Logs
        </NavLink>

        <NavLink to="/reports" className="nav-link">
          Reports
        </NavLink>
      </nav>
    </aside>
  );
}
