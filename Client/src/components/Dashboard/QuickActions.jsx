function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <p className="mt-2 text-slate-400">
        Jump directly into your placement preparation.
      </p>

      <div className="mt-8 grid gap-4">

        <button className="rounded-xl bg-cyan-500 px-6 py-4 text-left font-semibold text-white transition hover:bg-cyan-400">
          📄 Upload Resume
        </button>

        <button className="rounded-xl bg-purple-600 px-6 py-4 text-left font-semibold text-white transition hover:bg-purple-500">
          🤖 Generate AI Roadmap
        </button>

        <button className="rounded-xl bg-emerald-600 px-6 py-4 text-left font-semibold text-white transition hover:bg-emerald-500">
          🎤 Start Mock Interview
        </button>

        <button className="rounded-xl bg-orange-500 px-6 py-4 text-left font-semibold text-white transition hover:bg-orange-400">
          💻 Practice DSA
        </button>

      </div>

    </div>
  );
}

export default QuickActions;