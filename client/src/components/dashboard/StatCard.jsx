import './StatCard.css';

export default function StatCard({ title, value, description, variant }) {
  return (
    <div className={`stat-card ${variant}`}>

      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>

      {description && (
        <div className="stat-tooltip">{description}</div>
      )}
    </div>
  );
}
