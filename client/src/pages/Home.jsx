import StatCard from '../components/dashboard/StatCard';
import LineChart from '../components/dashboard/LineChart';


export default function Home() {
return (
    <div className="dashboard">
        <div className="stats-grid">
            <StatCard title="Total Entries" value="1,245" variant="entries" />
            <StatCard title="Total Exits" value="1,180" variant="exits" />
            <StatCard title="Total Attendees" value="32" variant="attendees" />
            <StatCard title="Active Now" value="32" />
        </div>
        <LineChart />
    </div>
    );
}