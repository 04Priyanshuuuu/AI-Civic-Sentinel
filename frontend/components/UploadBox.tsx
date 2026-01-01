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

  // 🔥 RENAMED HERE
  const saveAnalyzeResult = useAnalyzeStore((s) => s.setResult);

  useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [previews]);

  function handleFiles(files: FileList | null) {
    if (!files) return;

    const imageFiles = Array.from(files).filter((f) =>
      f.type.startsWith("image/")
    );

    const newPreviews = imageFiles.map((f) => ({
      file: f,
      url: URL.createObjectURL(f),
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  }

  function onRemove(index: number) {
    setPreviews((prev) => {
      const next = [...prev];
      URL.revokeObjectURL(next[index].url);
      next.splice(index, 1);
      return next;
    });
  }

  async function onAnalyze() {
    if (previews.length === 0) {
      alert("Please upload an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", previews[0].file);

    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/api/analyze/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      alert("AI analysis failed");
      return;
    }

    // 🔥 USE RENAMED FUNCTION
    saveAnalyzeResult(data.ai_result);
    router.push("/result");
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed p-6 text-center rounded-lg cursor-pointer ${
          isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-200"
        }`}
      >
        <p className="text-gray-500 font-semibold">
          Drag & drop image or <span className="text-blue-600">Browse</span>
        </p>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {previews.length > 0 && (
        <div className="mt-4 flex gap-2">
          {previews.map((p, i) => (
            <div key={p.url} className="relative w-14 h-14">
              <img
                src={p.url}
                className="w-full h-full object-cover rounded"
              />
              <button
                onClick={() => onRemove(i)}
                className="absolute top-0 right-0 bg-white text-xs rounded-full px-1"
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
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>
    </div>
  );
}
