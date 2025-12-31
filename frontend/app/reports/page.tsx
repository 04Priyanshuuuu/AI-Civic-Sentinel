"use client";
import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reports/")
      .then(res => res.json())
      .then(setReports);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Reported Issues</h1>
      {reports.map((r: any) => (
        <div key={r.id} className="bg-white p-4 mb-4 rounded shadow">
          <p><b>{r.issue_type}</b> – {r.severity}</p>
          <p>{r.summary}</p>
        </div>
      ))}
    </div>
  );
}
