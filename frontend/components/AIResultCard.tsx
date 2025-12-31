"use client";

export default function AIResultCard({ result }: { result: any }) {
  if (!result || !result.ai_result) return null;

  const { issue_type, severity, department, summary } = result.ai_result;

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">
      <p>
        <b>Issue:</b> {issue_type}
      </p>
      <p>
        <b>Severity:</b> {severity}
      </p>
      <p>
        <b>Department:</b> {department}
      </p>
      <p>{summary}</p>

      <button className="bg-green-600 text-white w-full py-3 rounded-lg">
        Submit Complaint
      </button>
    </div>
  );
}
