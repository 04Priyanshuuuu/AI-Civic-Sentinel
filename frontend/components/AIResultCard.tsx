"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AnalyzeResult = {
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  image_url?: string;
};

type Props = {
  result: AnalyzeResult;
  imageFile: File | null;
};

export default function AIResultCard({ result, imageFile }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // 🔥 SAFE PREVIEW LOGIC
  useEffect(() => {
    if (imageFile instanceof File) {
      const url = URL.createObjectURL(imageFile);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }

    if (result.image_url) {
      setPreview(result.image_url);
    }
  }, [imageFile, result.image_url]);

  const handleSubmit = async () => {
    if (!imageFile) {
      alert("Image missing");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("issue_type", result.issue_type);
      formData.append("severity", result.severity);
      formData.append("department", result.department);
      formData.append("summary", result.summary);

      const res = await fetch("http://127.0.0.1:8000/api/complaints/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Submit failed");

      router.push("/complaints");
    } catch (err) {
      console.error(err);
      alert("Failed to submit complaint");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-2xl space-y-4">

      {/* IMAGE */}
      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-200">
        {preview ? (
          <img
            src={preview}
            alt="Issue preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-center pt-20 text-gray-500">
            No image preview
          </p>
        )}
      </div>

      {/* DETAILS */}
      <p><b>Issue:</b> {result.issue_type}</p>
      <p><b>Severity:</b> {result.severity}</p>
      <p><b>Department:</b> {result.department}</p>
      <p className="text-gray-700">{result.summary}</p>

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-green-600 to-emerald-600
        hover:shadow-lg disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Complaint"}
      </button>
    </div>
  );
}
