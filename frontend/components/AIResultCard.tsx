export default function AIResultCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">
      <p><b>Issue:</b> Pothole detected</p>
      <p>
        <b>Severity:</b>{" "}
        <span className="text-red-600 font-semibold">HIGH</span>
      </p>
      <p><b>Department:</b> Road Maintenance</p>
      <p className="text-gray-600">
        A large pothole has been identified posing accident risk.
      </p>

      <button className="bg-green-600 text-white w-full py-3 rounded-lg">
        Submit Complaint
      </button>
    </div>
  );
}
