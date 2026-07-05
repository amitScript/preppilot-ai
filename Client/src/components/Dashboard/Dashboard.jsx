import Navbar from "../Navbar/Navbar";
import DashboardCard from "./DashboardCard";
import ProgressCard from "./ProgressCard";
import QuickActions from "./QuickActions";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="text-4xl font-bold">
          Welcome, {user?.name} 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Track your placement preparation from one place.
        </p>

        {/* Top Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <DashboardCard
            title="Resume Score"
            value="0 / 100"
          />

          <DashboardCard
            title="DSA Progress"
            value="0%"
          />

          <DashboardCard
            title="Interview Score"
            value="--"
          />

        </div>

        {/* Progress + Actions */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <ProgressCard />

          <QuickActions />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;