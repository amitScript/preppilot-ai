import { UserPlus, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={40} />,
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your current DSA level and placement goals.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Follow Your Roadmap",
    description:
      "Practice DSA, revise notes, solve problems and receive AI guidance every day.",
  },
  {
    icon: <Trophy size={40} />,
    title: "Crack Interviews",
    description:
      "Track your progress, attempt mock interviews and become placement ready.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          How It Works
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Three simple steps to become interview ready.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                {step.icon}
              </div>

              <div className="mb-4 text-cyan-400 font-bold text-xl">
                Step {index + 1}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;