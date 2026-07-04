import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer Aspirant",
    review:
      "PrepPilot AI completely changed the way I prepare for coding interviews. The roadmap keeps me focused every day.",
  },
  {
    name: "Priya Verma",
    role: "Final Year Student",
    review:
      "The dashboard and progress tracking helped me stay consistent. I finally completed my DSA roadmap.",
  },
  {
    name: "Rahul Singh",
    role: "Frontend Developer",
    review:
      "The AI suggestions and mock interview feature make this platform feel like having a personal mentor.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          What Learners Say
        </h2>

        <p className="mt-5 text-center text-slate-400">
          Thousands of students are preparing smarter with PrepPilot AI.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mb-4 flex gap-1 text-yellow-400">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="leading-7 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;