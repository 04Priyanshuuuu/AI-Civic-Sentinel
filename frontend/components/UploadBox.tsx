export default function UploadBox() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="border-2 border-dashed p-8 text-center rounded-lg">
        <p className="mb-4">Drag & drop image or browse</p>
        <input type="file" />
      </div>

      <button className="bg-blue-600 text-white w-full mt-6 py-3 rounded-lg">
        Analyze with AI
      </button>
    </div>
  );
}
