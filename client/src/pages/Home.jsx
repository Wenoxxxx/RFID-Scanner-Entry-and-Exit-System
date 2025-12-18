import StatCard from '../components/dashboard/StatCard';
import WeeklyLineChart from '../components/dashboard/DashboardLineChart'; 



export default function Home() {
return (
    

    <div className="dashboard">
        <h1 className='page-title'>Dashboard</h1>
        <p className="subtitle">Total and current activity</p>

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
        <WeeklyLineChart />
    </div>
    );
}