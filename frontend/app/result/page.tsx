"use client";

import { useAnalyzeStore } from "../../src/store/useAnalyzeStore";
import { useRouter } from "next/navigation";
import AIResultCard from "@/components/AIResultCard";

export default function ResultPage() {
  const result = useAnalyzeStore((s) => s.result);
  const clear = useAnalyzeStore((s) => s.clear);
  const imageFile = useAnalyzeStore((s) => s.imageFile);
  const router = useRouter();

  if (!result) {
    return (
      <main className="flex items-center justify-center h-[60vh]">
        <p className="text-gray-500 text-lg">
          No analysis found. Please analyze an image first.
        </p>
      </main>
    );
  }

  async function submitComplaint() {
    await fetch("http://127.0.0.1:8000/api/reports/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    });

    clear();
    router.push("/reports");
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <AIResultCard result={result} imageFile={imageFile} />
    </main>
  );
}
