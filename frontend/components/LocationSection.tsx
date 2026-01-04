"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useAnalyzeStore } from "@/src/store/useAnalyzeStore";

// 🚀 Client-only map (NO SSR)
const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
});

export default function LocationSection() {
  const setLocation = useAnalyzeStore((s) => s.setLocation);
  const location = useAnalyzeStore((s) => s.location);

  function useMyLocation() {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }),
      () => alert("Location permission denied")
    );
  }

  return (
    <section className="w-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl">
      <h3 className="text-lg font-bold text-blue-700">📍 Report Location</h3>

      <div className="flex items-center gap-3">
        <button
          onClick={useMyLocation}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Use my location
        </button>

        <span className="text-sm text-gray-700">
          {location
            ? `Lat ${location.lat.toFixed(4)}, Lng ${location.lng.toFixed(4)}`
            : "Optional"}
        </span>
      </div>

      {location && <LocationMap lat={location.lat} lng={location.lng} />}
    </section>
  );
}
