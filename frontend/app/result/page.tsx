"use client";
import { useAnalyzeStore } from "../../src/store/useAnalyzeStore";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const result = useAnalyzeStore((s) => s.result);
  const clear = useAnalyzeStore((s) => s.clear);
  const router = useRouter();

  if (!result) return <p className="p-10">No analysis found</p>;

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
    <main className="max-w-2xl mx-auto p-10">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow">
        <p><b>Issue:</b> {result.issue_type}</p>
        <p><b>Severity:</b> {result.severity}</p>
        <p><b>Department:</b> {result.department}</p>
        <p className="mt-2">{result.summary}</p>

        <button
          onClick={submitComplaint}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Submit Complaint
        </button>
      </div>
    </main>
  );
}
