import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="px-10 py-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            AI-Powered Civic Issue Reporting
          </h2>
          <p className="text-gray-600 mb-6">
            Upload a photo, let AI handle the rest.
          </p>
          <Link
            href="/report"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg"
          >
            Report an Issue
          </Link>
        </div>

        <div className="bg-blue-100 h-64 rounded-xl flex items-center justify-center">
          <p className="text-blue-700 font-semibold">
            AI Visual Illustration Here
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-16">
        <FeatureCard title="Snap & Upload" desc="Take a photo of the issue" />
        <FeatureCard title="AI Analysis" desc="Google Gemini detects problem" />
        <FeatureCard title="Track Status" desc="Live updates in real-time" />
      </section>
    </main>
  );
}
