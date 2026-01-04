"use client";

import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFire,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiDjango,
  SiGoogle,
  SiLeaflet,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function TechStack() {
  const stack = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-600" },
    { name: "Firebase", icon: <FaFire />, color: "text-orange-400" },
    { name: "Gemini Text AI", icon: <SiGoogle />, color: "text-indigo-500" },
    { name: "Gemini Vision AI", icon: <SiGoogle />, color: "text-purple-500" },
    { name: "Leaflet.js (Maps)", icon: <SiLeaflet />, color: "text-green-500" },

    // ✅ Newly Added
    { name: "Vercel (Frontend Hosting)", icon: <SiVercel />, color: "text-black" },
    { name: "Render (Backend Hosting)", icon: <SiRender />, color: "text-indigo-600" },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      
      {/* Background blur blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Tech Stack (15)
        </h2>

        <p className="text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
          A carefully chosen modern stack powering <b>AI Civic Sentinel</b>,
          built for performance, scalability, and real-world impact.
        </p>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
          {stack.map((item) => (
            <div
              key={item.name}
              className="
                relative group
                bg-white/60 backdrop-blur-xl
                border border-white/70
                rounded-2xl
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                px-6 py-8
                flex flex-col items-center justify-center
                hover:scale-105 hover:shadow-xl
                transition-all duration-300
              "
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/50 transition" />

              <div className={`text-4xl mb-3 ${item.color}`}>
                {item.icon}
              </div>

              <span className="text-sm font-semibold text-slate-800 text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <a
          href="https://github.com/04Priyanshuuuu/AI-Civic-Sentinel"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3
            px-10 py-4 rounded-xl
            bg-blue-600 text-white font-semibold
            shadow-lg hover:bg-blue-700
            transition
          "
        >
          <FaGithub className="text-xl" />
          View Project on GitHub
        </a>
      </div>
    </section>
  );
}
