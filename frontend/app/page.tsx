import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import UploadBox from "@/components/UploadBox";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/90 via-white/80 to-white" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              AI Civic Sentinel
            </span>

            <h1 className="text-5xl leading-tight font-extrabold text-blue-700 mb-6">
              Report Civic Issues <br /> with AI Precision
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Upload a photo of civic issues like potholes, garbage or broken roads.
              Our AI automatically analyzes, categorizes and tracks them.
            </p>

            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
              >
                Get Started
              </Link>

              <Link
                href="/reports"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                View Reports
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-6">
              <UploadBox />
            </div>

            <div className="mt-4 flex justify-center">
              <LocationSection />
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="1. Capture & Upload"
              desc="Click a photo of the civic issue using your phone"
            />
            <FeatureCard
              title="2. AI Analysis"
              desc="AI detects problem type, severity & location"
            />
            <FeatureCard
              title="3. Track Resolution"
              desc="Monitor real-time status & authority updates"
            />
          </div>
        </section>

        {/* FOOTER LINE */}
        <div className="text-center mt-20 text-sm text-gray-500 font-medium">
          From photo to resolution — powered by Artificial Intelligence 🚀
        </div>
      </div>
    </main>
  );
}
