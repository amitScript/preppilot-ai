function ProgressCard() {
  const progress = 0;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white">
        Your Progress
      </h2>

      <p className="mt-2 text-slate-400">
        Complete your roadmap to improve your placement chances.
      </p>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">
          <span className="text-slate-300">Overall Progress</span>

          <span className="text-cyan-400">
            {progress}%
          </span>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-700">

          <div
            className="h-3 rounded-full bg-cyan-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-slate-800 p-4">
          <h3 className="text-slate-400">
            DSA
          </h3>

          <p className="mt-2 text-xl font-bold text-cyan-400">
            0%
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <h3 className="text-slate-400">
            Web Dev
          </h3>

          <p className="mt-2 text-xl font-bold text-cyan-400">
            0%
          </p>
        </div>

      </div>

    </div>
  );
}

export default ProgressCard;