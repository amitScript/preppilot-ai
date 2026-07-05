function DashboardCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-cyan-500 hover:shadow-cyan-500/10">

      <h2 className="text-lg font-medium text-slate-400">
        {title}
      </h2>

      <p className="mt-4 text-3xl font-bold text-cyan-400">
        {value}
      </p>

    </div>
  );
}

export default DashboardCard;