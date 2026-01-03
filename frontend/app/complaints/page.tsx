"use client";

import { useEffect, useState } from "react";

type Report = {
  id: number;
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  status: string;
  image?: string;
  location?: string;
};

function SeverityBadge({ level }: { level: string }) {
  const base = "px-3 py-1 rounded-full text-xs font-semibold";

  if (level?.toUpperCase() === "HIGH")
    return <span className={`${base} bg-red-100 text-red-700`}>HIGH</span>;
  if (level?.toUpperCase() === "MEDIUM")
    return <span className={`${base} bg-yellow-100 text-yellow-700`}>MEDIUM</span>;
  return <span className={`${base} bg-green-100 text-green-700`}>LOW</span>;
}

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reports/")
      .then((res) => res.json())
      .then((data) => {
        setReports(data.reports || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = reports.filter(
    (r) =>
      r.issue_type.toLowerCase().includes(search.toLowerCase()) ||
      r.summary.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc: any, r) => {
    acc[r.department] = acc[r.department] || [];
    acc[r.department].push(r);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Reported Issues
            </h1>
            <p className="text-gray-600 mt-1">
              All complaints submitted by citizens
            </p>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reports..."
            className="px-4 py-2 rounded-xl border bg-white shadow"
          />
        </div>

        {loading && (
          <div className="p-10 text-center text-gray-500">
            Loading reports...
          </div>
        )}

        {!loading &&
          Object.entries(grouped).map(([dept, items]: any) => (
            <div key={dept} className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-slate-800">
                {dept}
              </h2>

              <div className="space-y-6">
                {items.map((r: Report) => (
                  <div
                    key={r.id}
                    className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-6"
                  >
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gray-200 overflow-hidden shrink-0">
                        {r.image ? (
                          <img src={r.image} className="w-full h-full object-cover" />
                        ) : (
                          <div className="flex items-center justify-center h-full text-xs text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-slate-900">
                            {r.issue_type}
                          </h3>
                          <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-semibold">
                            {r.status}
                          </span>
                        </div>

                        <div className="flex gap-3 mt-2">
                          <SeverityBadge level={r.severity} />
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                            {r.department}
                          </span>
                        </div>

                        <p className="text-gray-700 mt-3">
                          {r.summary}
                        </p>

                        <p className="text-xs text-gray-400 mt-2">
                          📍 {r.location || "Location not provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
