"use client";

import { useEffect, useState } from "react";

type Report = {
  id: number;
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  status: string;
};

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reports/")
      .then((res) => res.json())
      .then((data) => {
        // ✅ IMPORTANT FIX
        setReports(data.reports || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-10">Loading reports...</div>;
  }

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Reported Issues
      </h1>

      {reports.length === 0 && (
        <p className="text-gray-500">No complaints found.</p>
      )}

      <div className="space-y-4">
        {reports.map((r) => (
          <div
            key={r.id}
            className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {r.issue_type}
              </h3>
              <span className="text-sm font-semibold text-blue-600">
                {r.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-1">
              Severity: {r.severity} • Dept: {r.department}
            </p>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {r.summary}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
