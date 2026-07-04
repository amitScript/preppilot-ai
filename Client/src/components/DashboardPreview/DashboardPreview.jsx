import {
  LayoutDashboard,
  Brain,
  Target,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Your Personal Dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Track your DSA journey, monitor progress, receive AI insights and
            stay interview-ready with one powerful dashboard.
          </p>

        </div>

        {/* Dashboard */}

        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Left */}

            <div className="space-y-6">

              <div className="rounded-xl bg-slate-800 p-6">

                <LayoutDashboard
                  className="mb-4 text-cyan-400"
                  size={34}
                />

                <h3 className="text-xl font-bold text-white">
                  Dashboard
                </h3>

                <p className="mt-2 text-slate-400">
                  Everything in one place.
                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-6">

                <CalendarDays
                  className="mb-4 text-cyan-400"
                  size={34}
                />

                <h3 className="text-xl font-bold text-white">
                  Daily Streak
                </h3>

                <p className="mt-2 text-slate-400">
                  24 Days 🔥
                </p>

              </div>

            </div>

            {/* Center */}

            <div className="rounded-xl bg-slate-800 p-8">

              <h3 className="text-2xl font-bold text-white">
                DSA Progress
              </h3>

              <div className="mt-8 h-4 rounded-full bg-slate-700">

                <div className="h-4 w-3/4 rounded-full bg-cyan-400"></div>

              </div>

              <p className="mt-4 text-cyan-400 font-semibold">
                75% Completed
              </p>

              <div className="mt-10 flex justify-between">

                <div>

                  <p className="text-slate-400">
                    Solved
                  </p>

                  <h4 className="text-3xl font-bold text-white">
                    312
                  </h4>

                </div>

                <div>

                  <p className="text-slate-400">
                    Remaining
                  </p>

                  <h4 className="text-3xl font-bold text-white">
                    104
                  </h4>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="rounded-xl bg-slate-800 p-6">

                <Brain
                  className="mb-4 text-cyan-400"
                  size={34}
                />

                <h3 className="text-xl font-bold text-white">
                  AI Recommendation
                </h3>

                <p className="mt-2 text-slate-400">
                  Focus on Dynamic Programming this week.
                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-6">

                <TrendingUp
                  className="mb-4 text-cyan-400"
                  size={34}
                />

                <h3 className="text-xl font-bold text-white">
                  Interview Readiness
                </h3>

                <p className="mt-2 text-green-400 font-semibold">
                  88%
                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-6">

                <Target
                  className="mb-4 text-cyan-400"
                  size={34}
                />

                <h3 className="text-xl font-bold text-white">
                  Today's Goal
                </h3>

                <p className="mt-2 text-slate-400">
                  Solve 5 Medium Problems
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;