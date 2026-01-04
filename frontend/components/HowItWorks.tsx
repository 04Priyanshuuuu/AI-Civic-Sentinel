import { Upload, Brain, FileText } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload Image",
      desc: "Upload a photo of the civic issue directly from your device.",
      icon: Upload,
    },
    {
      title: "AI Analysis",
      desc: "AI analyzes the issue and classifies it accurately.",
      icon: Brain,
    },
    {
      title: "Auto Report",
      desc: "A structured complaint report is generated automatically.",
      icon: FileText,
    },
  ];

  return (
    <section className="relative py-28 bg-white border-y border-gray-200 overflow-hidden">
      
      {/* 🔵 Animated Blue Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[-30%] w-[60%] h-[300px]
                        bg-blue-200/40 blur-3xl rounded-full
                        animate-move-right" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Report civic issues in just three simple AI-powered steps
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-10 shadow-xl
                           border border-gray-100 hover:-translate-y-2
                           transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full
                                bg-blue-600 text-white font-bold flex
                                items-center justify-center shadow-lg">
                  {i + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50
                                flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
