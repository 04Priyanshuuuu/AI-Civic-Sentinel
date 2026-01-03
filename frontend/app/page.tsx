import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import UploadBox from "@/components/UploadBox";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <section className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5
              text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              AI Civic Sentinel
            </span>

            <h1 className="text-5xl font-extrabold leading-tight text-slate-900">
              AI-Powered <br />
              Civic Issue Reporting
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-md">
              Upload a photo, let AI detect the issue, severity and department —
              from potholes to garbage.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/report"
                className="px-8 py-3 rounded-xl font-semibold text-white
                bg-blue-600 hover:bg-blue-700 shadow-lg transition"
              >
                Report an Issue
              </Link>

              <Link
                href="/reports"
                className="px-8 py-3 rounded-xl font-semibold text-blue-600
                border border-blue-200 hover:bg-blue-50 transition"
              >
                View Reports
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-xl
              border border-white/60
              rounded-3xl shadow-2xl p-8">
              <UploadBox />
            </div>

            <div className="mt-6">
              <LocationSection />
            </div>
          </div>
        </section>

        {/* FOOTER LINE */}
        <p className="text-center mt-24 text-sm text-slate-500">
          From a photo to resolution — powered by AI 🚀
        </p>
      </div>
    </main>
  );
}
