import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-950 to-slate-900 p-12 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Crack Your Dream Placement?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Join thousands of students preparing smarter with AI-powered
            interview guidance, DSA tracking and personalized learning paths.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400">

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">

              Learn More

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;