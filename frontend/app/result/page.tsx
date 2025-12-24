import AIResultCard from "@/components/AIResultCard";

export default function ResultPage() {
  return (
    <main className="px-10 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        AI Analysis Result
      </h2>
      <AIResultCard />
    </main>
  );
}
