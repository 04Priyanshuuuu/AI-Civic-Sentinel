"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Search,
} from "lucide-react";

type Issue = {
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

export default function Dashboard() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reports/")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data.reports || []);
        setLoading(false);
      });
  }, []);

  const filtered = issues.filter(
    (i) =>
      i.issue_type.toLowerCase().includes(search.toLowerCase()) ||
      i.summary.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc: any, i) => {
    acc[i.department] = acc[i.department] || [];
    acc[i.department].push(i);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="flex max-w-[1400px] mx-auto px-6 py-8 gap-8">

        {/* SIDEBAR */}
        <aside className="w-64">
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-5">
            <h3 className="text-xs font-bold text-gray-400 mb-6 uppercase">
              Admin
            </h3>

            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold shadow"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <Link
                href="/reports"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-700 hover:bg-blue-50"
              >
                <FileText size={18} />
                Complaints
              </Link>

              <Link
                href="/settings"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-700 hover:bg-blue-50"
              >
                <Settings size={18} />
                Settings
              </Link>
            </nav>
          </div>
        </aside>

        {/* MAIN */}
        <section className="flex-1">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Admin Dashboard
            </h1>

            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search issues..."
                className="pl-10 pr-4 py-2 rounded-xl border bg-white/80 backdrop-blur shadow-sm"
              />
            </div>
          </div>

          {/* CONTENT */}
          {loading && (
            <div className="p-10 text-center text-gray-500">
              Loading complaints...
            </div>
          )}

          {!loading &&
            Object.entries(grouped).map(([dept, items]: any) => (
              <div key={dept} className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  {dept}
                </h2>

                <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden">
                  {items.map((it: Issue) => (
                    <div
                      key={it.id}
                      className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-blue-50 transition border-b last:border-none"
                    >
                      {/* ISSUE */}
                      <div className="col-span-4 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gray-200 overflow-hidden shrink-0">
                          {it.image ? (
                            <img src={it.image} className="w-full h-full object-cover" />
                          ) : (
                            <div className="flex items-center justify-center h-full text-xs text-gray-400">
                              No Image
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {it.issue_type}
                          </p>
                          <p className="text-sm text-gray-500">
                            {it.summary}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            📍 {it.location || "Location not provided"}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <SeverityBadge level={it.severity} />
                      </div>

                      <div className="col-span-3">
                        <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm">
                          {it.department}
                        </span>
                      </div>

                      <div className="col-span-2">
                        <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-semibold">
                          {it.status}
                        </span>
                      </div>

                      <div className="col-span-1 text-right">
                        <button className="text-sm font-semibold text-blue-600 hover:underline">
                          Update
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
}
