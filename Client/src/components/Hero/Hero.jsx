function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-12 px-6 py-24 lg:flex-row">

        {/* Left */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            🚀 AI Powered Interview Preparation Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Prepare Smarter.
            <br />
            <span className="text-cyan-400">
              Crack Interviews Faster.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Master DSA, build personalized roadmaps, practice mock interviews,
            track progress and get AI-powered guidance—all in one platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="w-full max-w-xl">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Dashboard Preview
              </h2>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Live
              </span>
            </div>

            <div className="space-y-5">

              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-slate-400">
                  DSA Progress
                </p>

                <div className="mt-3 h-3 rounded-full bg-slate-700">

                  <div className="h-3 w-3/4 rounded-full bg-cyan-400"></div>

                </div>
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-slate-400">
                  Today's Goal
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  Solve 5 LeetCode Problems
                </h3>
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-slate-400">
                  AI Suggestion
                </p>

                <h3 className="mt-2 text-lg font-semibold text-cyan-400">
                  Focus on Graph Algorithms
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;