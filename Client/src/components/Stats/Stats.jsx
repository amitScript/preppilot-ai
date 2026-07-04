function Stats() {
  const stats = [
    {
      number: "15K+",
      label: "Active Students",
    },
    {
      number: "250K+",
      label: "Problems Solved",
    },
    {
      number: "96%",
      label: "Interview Success",
    },
    {
      number: "4.9★",
      label: "User Rating",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Trusted by Thousands of Learners
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:border-cyan-400"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;