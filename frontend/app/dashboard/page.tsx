"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Issue = {
  id: number;
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  status: string;
};

function SeverityPill({ level }: { level: string }) {
  const base = "px-3 py-1 rounded-full text-sm font-semibold";

  if (level?.toUpperCase() === "HIGH")
    return <span className={`${base} bg-red-600 text-white`}>HIGH</span>;

  if (level?.toUpperCase() === "MEDIUM")
    return <span className={`${base} bg-yellow-400 text-black`}>MEDIUM</span>;

  return <span className={`${base} bg-green-600 text-white`}>LOW</span>;
}

export default function Dashboard() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔄 Fetch complaints
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reports/")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data.reports || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 🔁 Update status
  async function markInProgress(id: number) {
    await fetch(
      `http://127.0.0.1:8000/api/complaints/${id}/status/`,
      {
        method: "PATCH",
        body: JSON.stringify({ status: "In Progress" }),
      }
    );

    // Optimistic UI update
    setIssues((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, status: "In Progress" } : i
      )
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-6 py-8">
      <div className="max-w-7xl mx-auto flex gap-6">

        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-zinc-900 rounded-xl p-4 shadow">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md bg-blue-50 dark:bg-zinc-800 text-blue-600 font-semibold"
            >
              Dashboard
            </Link>
            <Link
              href="/reports"
              className="block px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
            >
              Complaints
            </Link>
          </nav>
        </aside>

        {/* MAIN */}
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-6">
            Admin Dashboard
          </h2>

          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow overflow-hidden">

            {/* TABLE HEADER */}
            <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 bg-gray-100 dark:bg-zinc-800 font-bold border-b">
              <div className="col-span-2">Issue</div>
              <div>Severity</div>
              <div>Department</div>
              <div>Status</div>
              <div></div>
            </div>

            {/* LOADING */}
            {loading && (
              <div className="p-6 text-center text-gray-500">
                Loading complaints...
              </div>
            )}

            {/* EMPTY */}
            {!loading && issues.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No complaints found
              </div>
            )}

            {/* ROWS */}
            <div className="divide-y">
              {issues.map((it) => (
                <div key={it.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-zinc-800">
                  <div className="grid md:grid-cols-6 gap-4 items-center">

                    <div className="col-span-2">
                      <p className="font-semibold">{it.issue_type}</p>
                      <p className="text-sm text-gray-500">
                        {it.summary}
                      </p>
                    </div>

                    <SeverityPill level={it.severity} />

                    <div>{it.department}</div>

                    <div className="font-semibold text-blue-600">
                      {it.status}
                    </div>

                    <div className="text-right">
                      {it.status !== "In Progress" && (
                        <button
                          onClick={() => markInProgress(it.id)}
                          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Mark In Progress
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
