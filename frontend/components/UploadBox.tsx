"use client";

import React, { useRef, useState, useEffect } from "react";
import AIResultCard from "@/components/AIResultCard";

type Preview = {
  file: File;
  url: string;
};

export default function UploadBox() {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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
    setPreviews((prev) => {
      return [...prev, ...newPreviews];
    });
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  }

  function onRemove(index: number) {
    setPreviews((prev) => {
      const next = prev.slice();
      const [removed] = next.splice(index, 1);
      URL.revokeObjectURL(removed.url);
      return next;
    });
  }

  async function onAnalyze() {
    if (previews.length === 0) {
      alert("Please add at least one image.");
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

    setResult(data);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={onDrop}
        className={`border-2 border-dashed p-6 text-center rounded-lg transition-colors ${
          isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-200"
        }`}
        onClick={() => inputRef.current?.click()}
        role="button"
      >
        <p className="mb-3 text-gray-500 font-medium font-bold">
          {" "}
          Tap Here To Drag & drop photos, or <br />
          <span className="text-blue-400 cursor-pointer font-bold">Browse</span>
        </p>
        <p className="text-sm text-gray-500">JPG, PNG — up to 10MB each</p>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {previews.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 max-h-16 overflow-auto items-start">
          {previews.map((p, i) => (
            <div
              key={p.url}
              className="relative w-12 h-12 rounded-md overflow-hidden border flex-shrink-0"
            >
              <img
                src={p.url}
                alt={p.file.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => onRemove(i)}
                className="absolute top-1 right-1 bg-white/80 rounded-full p-1 text-sm"
                aria-label="Remove image"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {result && <AIResultCard result={result} />}

      <div className="mt-6 flex gap-3 items-center">
        <button
          onClick={onAnalyze}
          disabled={loading}
          className={`bg-blue-600 text-white flex-1 py-3 rounded-lg ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze with AI"}
        </button>

        <div className="bg-gray-100 rounded-lg px-3 py-3 text-xs text-gray-600 text-center min-w-max">
          <div className="font-semibold">AI Ready</div>
          <div>
            {previews.length} {previews.length === 1 ? "image" : "images"}
          </div>
        </div>
      </div>
    </div>
  );
}
