import StatCard from "../components/dashboard/StatCard";
import "./Logs.css";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import useConfirm from "../hooks/useConfirm";

export default function Logs() {
  const {
    isOpen,
    type,
    payload,
    openConfirm,
    closeConfirm,
  } = useConfirm();

  const handleConfirm = () => {
    if (type === "edit") {
      console.log("Edit log:", payload);
    }

    if (type === "delete") {
      console.log("Delete log:", payload);
    }

    closeConfirm();
  };

  return (
    <div className="card">
      <h1>Logs</h1>
      <p className="subtitle">Timeline scanner logs</p>

      {/* STATS */}
      <div className="stats-grid">
        
        <StatCard
          title="Total Entries"
          value="1,245"
          variant="entries"
          description="Total number of users who entered today."
        />

        <StatCard
          title="Total Exits"
          value="1,180"
          variant="exits"
          description="Total number of users who exited today."
        />

        <StatCard
          title="Total Attendees"
          value="32"
          variant="attendees"
          description="Users currently registered for today."
        />

      </div>

      {/* LOG TABLE */}
      <table className="table">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col style={{ width: "120px" }} />
        </colgroup>

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
                onClick={() => openConfirm("edit", 1)}
              >
                <HiPencilAlt />
              </button>

              <button
                className="icon-btn delete"
                onClick={() => openConfirm("delete", 1)}
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
                onClick={() => openConfirm("edit", 2)}
              >
                <HiPencilAlt />
              </button>

              <button
                className="icon-btn delete"
                onClick={() => openConfirm("delete", 2)}
              >
                <HiTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* CONFIRMATION MODAL */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>
              {type === "delete"
                ? "Delete this record?"
                : "Edit this record?"}
            </h3>

            <p>
              {type === "delete"
                ? "This action cannot be undone."
                : "You are about to modify this record."}
            </p>

            <div className="modal-actions">
              <button className="btn cancel" onClick={closeConfirm}>
                Cancel
              </button>

              <button className={`btn ${type}`} onClick={handleConfirm}>
                {type === "delete" ? "Delete" : "Confirm"}
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
