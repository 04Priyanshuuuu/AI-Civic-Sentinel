import UploadBox from "@/components/UploadBox";

export default function ReportPage() {
  return (
    <main className="px-10 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Report a Civic Issue
      </h2>
      <UploadBox />
    </main>
  );
}
