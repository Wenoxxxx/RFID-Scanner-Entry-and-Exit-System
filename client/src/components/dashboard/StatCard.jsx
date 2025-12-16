import './StatCard.css';

export default function StatCard({ title, value, variant = "default" }) {
  return (
    <div className={`card stat-card ${variant}`}>
      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>
    </div>
  );
}
