import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is PrepPilot AI free to use?",
    answer:
      "Yes. The basic version is free. Premium AI features will be available in future updates.",
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Initially C++, Java, Python and JavaScript will be supported.",
  },
  {
    question: "Can I track my DSA progress?",
    answer:
      "Yes. Every solved problem, streak, topic completion and roadmap progress will be saved.",
  },
  {
    question: "Does it provide AI interview guidance?",
    answer:
      "Yes. AI will suggest problems, explain concepts and help prepare for interviews.",
  },
];

function FAQ() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-5 text-center text-slate-400">
          Everything you need to know about PrepPilot AI.
        </p>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">

                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                <ChevronDown className="text-cyan-400" />
              </div>

              <p className="mt-4 text-slate-400 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;