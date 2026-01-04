import { Sparkles, AlertTriangle, MapPin, Layers } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "AI Issue Detection",
      desc: "AI automatically detects civic issues from uploaded images.",
      icon: Sparkles,
    },
    {
      title: "Severity Analysis",
      desc: "Smart severity prediction helps prioritize complaints.",
      icon: AlertTriangle,
    },
    {
      title: "Auto Department Mapping",
      desc: "Issues are routed to the correct government department.",
      icon: Layers,
    },
    {
      title: "Image + Location Proof",
      desc: "Every report is backed by image and geo-location data.",
      icon: MapPin,
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-blue-50 border-b border-gray-200 overflow-hidden">
      
      {/* 🔵 Background animation (RIGHT → LEFT → RIGHT) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2
                     w-[75%] h-[340px] rounded-full
                     bg-blue-300/30 blur-3xl
                     animate-float-reverse"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Powerful AI Features
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Built to simplify civic reporting with speed, accuracy, and trust
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-8 shadow-xl
                           border border-gray-100 hover:-translate-y-2
                           transition-all duration-300"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-3xl" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50
                                flex items-center justify-center mb-6
                                group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
