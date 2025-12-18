import StatCard from "../components/dashboard/StatCard";
import "./Logs.css";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

export default function Logs() {

  const handleEdit = (id) => {
    console.log("Edit log:", id);
  };

  const handleDelete = (id) => {
    if (confirm("Delete this record?")) {
      console.log("Delete log:", id);
    }
  };

  return (
    <div className="card">
    

        <h1>Logs</h1>

      {/* STATS */}
      <div className="stats-grid">
        <StatCard title="Total Entries" value="1,245" />
        <StatCard title="Total Exits" value="1,180" />
        <StatCard title="Total Attendees" value="32" />
        <StatCard title="Active Inside" value="32" />
      </div>
    
      {/* LOG TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Name</th>
            <th>Time</th>
            <th>Status</th>
            <th className="actions-col">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Admin</td>
            <td>John Doe</td>
            <td>08:01 AM</td>
            <td className="status in">IN</td>
            <td className="actions">
              <button
                className="icon-btn edit"
                onClick={() => handleEdit(1)}
                title="Edit"
              >
                <HiPencilAlt />
              </button>

              <button
                className="icon-btn delete"
                onClick={() => handleDelete(1)}
                title="Delete"
              >
                <HiTrash />
              </button>
            </td>
          </tr>

          <tr>
            <td>Admin</td>
            <td>John Doe</td>
            <td>05:10 PM</td>
            <td className="status out">OUT</td>
            <td className="actions">
              <button
                className="icon-btn edit"
                onClick={() => handleEdit(2)}
                title="Edit"
              >
                <HiPencilAlt />
              </button>

              <button
                className="icon-btn delete"
                onClick={() => handleDelete(2)}
                title="Delete"
              >
                <HiTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
