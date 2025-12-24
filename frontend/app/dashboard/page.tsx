export default function Dashboard() {
  return (
    <main className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-6">
        My Complaints
      </h2>

      <div className="bg-white p-4 rounded-xl shadow">
        <p>Pothole – HIGH – Pending</p>
        <p>Garbage – LOW – Resolved</p>
      </div>
    </main>
  );
}
