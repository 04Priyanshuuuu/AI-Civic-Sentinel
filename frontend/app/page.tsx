import Image from "next/image";
import UploadBox from "@/components/UploadBox";
import LocationSection from "@/components/LocationSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">

      {/* 🌆 HERO BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[600px] -z-10">
        <Image
          src="/city.jpg"
          alt="City background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white" />
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
            AI Civic Sentinel
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900">
            AI-Powered <br /> Civic Issue Reporting
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-md">
            Upload a photo, let AI detect the issue, severity and department —
            from potholes to garbage.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/report"
              className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Report an Issue
            </Link>

            <Link
              href="/complaints"
              className="px-8 py-3 rounded-xl border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              View Reports
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8">
            <UploadBox />
          </div>
        </div>
      </section>

      {/* LOCATION – FULL WIDTH */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <LocationSection />
      </section>

      <HowItWorks />
      <Features />
      <Advantages />
      <TechStack />
      <ContactSection />
    </main>
  );
}
