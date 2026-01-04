"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAnalyzeStore } from "@/src/store/useAnalyzeStore";

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
  const location = useAnalyzeStore((s) => s.location);

  useEffect(() => {
    if (imageFile instanceof File) {
      const url = URL.createObjectURL(imageFile);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    if (result.image_url) setPreview(result.image_url);
  }, [imageFile, result.image_url]);

  const handleSubmit = async () => {
    if (!imageFile) return alert("Image missing");

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("issue_type", result.issue_type);
      formData.append("severity", result.severity);
      formData.append("department", result.department);
      formData.append(
        "location",
        location ? `${location.lat},${location.lng}` : ""
      );

      formData.append("summary", result.summary);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/complaints/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Submit failed");
      router.push("/complaints");
    } catch (err) {
      alert("Failed to submit complaint");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8">
      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* LEFT — IMAGE (HALF SCREEN) */}
        <div className="w-full h-[420px] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
          {preview ? (
            <img
              src={preview}
              alt="Issue preview"
              className="w-full h-full object-contain rounded-xl"
            />
          ) : (
            <p className="text-gray-500">No image preview</p>
          )}
        </div>

        {/* RIGHT — DETAILS */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Issue: <span className="font-normal">{result.issue_type}</span>
            </h2>

            <p className="text-lg">
              <b>Severity:</b>{" "}
              <span className="text-red-600 font-semibold">
                {result.severity}
              </span>
            </p>

            <p className="text-lg">
              <b>Department:</b> {result.department}
            </p>

            {location && (
              <p className="text-sm text-gray-600">
                📍<b>Location:</b> {location.lat.toFixed(4)},{" "}
                {location.lng.toFixed(4)}
              </p>
            )}

            <p className="text-gray-700 leading-relaxed text-base">
              {result.summary}
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 rounded-2xl text-lg font-semibold text-white
            bg-gradient-to-r from-green-600 to-emerald-600 hover:cursor-pointer
            hover:shadow-xl transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </div>
      </div>
    </div>
  );
}
