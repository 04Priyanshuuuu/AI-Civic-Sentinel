"use client";

export default function AIResultCard({ result }: { result: any }) {
  if (!result?.ai_result) return null;

  const { issue_type, severity, department, summary } = result.ai_result;

  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-2xl space-y-3">
      <p><b>Issue:</b> {issue_type}</p>
      <p><b>Severity:</b> {severity}</p>
      <p><b>Department:</b> {department}</p>
      <p className="text-gray-700">{summary}</p>

      <button className="w-full py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg transition">
        Submit Complaint
      </button>
    </div>
  );
}
