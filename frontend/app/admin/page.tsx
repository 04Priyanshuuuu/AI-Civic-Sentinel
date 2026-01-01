"use client";

import { useEffect, useState } from "react";

type Complaint = {
  id: number;
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  status: string;
};

function SeverityPill({ level }: { level: string }) {
  const base =
    "px-3 py-1 rounded-full text-xs font-semibold inline-block";

  if (level === "High" || level === "HIGH")
    return <span className={`${base} bg-red-100 text-red-700`}>HIGH</span>;

  if (level === "Medium" || level === "MEDIUM")
    return (
      <span className={`${base} bg-yellow-100 text-yellow-700`}>
        MEDIUM
      </span>
    );

  return <span className={`${base} bg-green-100 text-green-700`}>LOW</span>;
}

export default function AdminPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reports/")
      .then((res) => res.json())
      .then((data) => {
        setComplaints(data.reports || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function markResolved(id: number) {
    await fetch(
      `http://127.0.0.1:8000/api/complaints/${id}/status/`,
      {
        method: "PATCH",
        body: JSON.stringify({ status: "Resolved" }),
      }
    );

    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: "Resolved" } : c
      )
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-8 py-14">
      <h2 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h2>

      <div className="bg-white rounded-2xl shadow-soft border border-border overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-surface text-sm font-semibold text-text-secondary">
          <div className="col-span-2">Issue</div>
          <div>Severity</div>
          <div>Department</div>
          <div>Status</div>
          <div></div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="p-6 text-center text-text-secondary">
            Loading complaints…
          </div>
        )}

        {/* EMPTY */}
        {!loading && complaints.length === 0 && (
          <div className="p-6 text-center text-text-secondary">
            No complaints found
          </div>
        )}

        {/* ROWS */}
        <div className="divide-y">
          {complaints.map((c) => (
            <div
              key={c.id}
              className="grid grid-cols-6 gap-4 px-6 py-5 items-center hover:bg-surface transition"
            >
              <div className="col-span-2">
                <p className="font-semibold">{c.issue_type}</p>
                <p className="text-sm text-text-secondary">
                  {c.summary}
                </p>
              </div>

              <SeverityPill level={c.severity} />

              <div className="text-sm">
                {c.department}
              </div>

              <div className="text-sm font-medium text-brand-600">
                {c.status}
              </div>

              <div className="text-right">
                {c.status !== "Resolved" && (
                  <button
                    onClick={() => markResolved(c.id)}
                    className="px-4 py-2 text-sm rounded-lg bg-brand-500 text-white hover:bg-brand-600"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
