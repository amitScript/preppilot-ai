import {
  Brain,
  Code2,
  BarChart3,
  Target,
  NotebookPen,
  MessageSquareText,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={32} />,
    title: "AI Study Assistant",
    description:
      "Get instant explanations, hints and personalized guidance powered by AI.",
  },
  {
    icon: <Code2 size={32} />,
    title: "DSA Tracker",
    description:
      "Track solved problems, topic coverage and daily coding streaks.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics Dashboard",
    description:
      "Visualize your strengths, weaknesses and overall interview readiness.",
  },
  {
    icon: <Target size={32} />,
    title: "Personalized Roadmap",
    description:
      "Follow a customized roadmap based on your current skill level.",
  },
  {
    icon: <NotebookPen size={32} />,
    title: "Smart Notes",
    description:
      "Save important concepts, revision notes and interview tips in one place.",
  },
  {
    icon: <MessageSquareText size={32} />,
    title: "Mock Interviews",
    description:
      "Practice technical interviews with AI-generated questions and feedback.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          Everything You Need
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          PrepPilot AI combines DSA practice, AI guidance, analytics and
          interview preparation into one modern platform.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mb-6 text-cyan-400">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;