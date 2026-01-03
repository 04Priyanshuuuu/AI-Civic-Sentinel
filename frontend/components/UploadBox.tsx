"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAnalyzeStore } from "../src/store/useAnalyzeStore";

type Preview = {
  file: File;
  url: string;
};

export default function UploadBox() {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const saveAnalyzeResult = useAnalyzeStore((s) => s.setResult);

  useEffect(() => {
    return () => previews.forEach((p) => URL.revokeObjectURL(p.url));
  }, [previews]);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const imageFiles = Array.from(files).filter((f) =>
      f.type.startsWith("image/")
    );
    setPreviews((prev) => [
      ...prev,
      ...imageFiles.map((f) => ({
        file: f,
        url: URL.createObjectURL(f),
      })),
    ]);
  }

  async function onAnalyze() {
    if (!previews.length) return alert("Upload image first");
    const formData = new FormData();
    formData.append("image", previews[0].file);

    setLoading(true);
    const res = await fetch("http://127.0.0.1:8000/api/analyze/", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setLoading(false);

    if (!data.success) return alert("AI analysis failed");

    saveAnalyzeResult(data.ai_result);
    router.push("/result");
  }

  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-2xl">
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`transition-all cursor-pointer border-2 border-dashed rounded-xl p-8 text-center
          ${
            isDragOver
              ? "border-blue-500 bg-blue-100/40"
              : "border-white/50 bg-white/20"
          }`}
      >
        <p className="font-semibold text-blue-700">
          Drag & Drop image or <span className="underline">Browse</span>
        </p>
        <p className="text-xs text-gray-600 mt-1">AI will analyze the issue</p>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {previews.length > 0 && (
        <div className="mt-4 flex gap-3">
          {previews.map((p, i) => (
            <div key={p.url} className="relative w-16 h-16">
              <img
                src={p.url}
                className="w-full h-full object-cover rounded-xl"
              />
              <button
                onClick={() =>
                  setPreviews((prev) => prev.filter((_, idx) => idx !== i))
                }
                className="absolute -top-2 -right-2 bg-white rounded-full px-2 text-xs shadow"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onAnalyze}
        disabled={loading}
        className="mt-6 w-full py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-blue-600 to-indigo-600
        hover:scale-[1.02] transition shadow-lg disabled:opacity-60"
      >
        {loading ? "Analyzing…" : "Analyze with AI"}
      </button>
    </div>
  );
}
