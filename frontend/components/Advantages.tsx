"use client";

export default function Advantages() {
  const points = [
    {
      title: "Faster Resolution",
      desc: "AI prioritization ensures quicker action on civic issues.",
      icon: "⚡",
    },
    {
      title: "Zero Paperwork",
      desc: "Fully digital complaints with image & geo-proof.",
      icon: "📄",
    },
    {
      title: "Transparent Tracking",
      desc: "Track complaint progress in real time.",
      icon: "📊",
    },
    {
      title: "Citizen Friendly",
      desc: "Simple reporting experience for all citizens.",
      icon: "🤝",
    },
    {
      title: "AI Accuracy",
      desc: "Smart detection reduces false complaints.",
      icon: "🧠",
    },
    {
      title: "Smart City Ready",
      desc: "Built to scale with future urban infrastructure.",
      icon: "🏙️",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      
      {/* 🔵 Background animated blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute top-32 -right-40 w-[420px] h-[420px] bg-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse delay-200" />

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Why AI Civic Sentinel?
        </h2>

        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-16">
          A next-generation AI platform transforming civic issue reporting
          with speed, transparency, and accuracy.
        </p>

        {/* Cards */}
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {points.map((item, i) => (
            <div
              key={i}
              className="
                relative bg-white/70 backdrop-blur-xl border border-white/40 
                rounded-3xl p-8 shadow-xl 
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
