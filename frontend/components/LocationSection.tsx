"use client";

import React, { useState } from "react";

export default function LocationSection() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  function useMyLocation() {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }),
      () => alert("Location permission denied")
    );
  }

  return (
    <section className="w-full bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-xl">
      <h3 className="text-lg font-bold text-blue-700 mb-3">📍 Report Location</h3>

      <div className="flex items-center gap-3">
        <button
          onClick={useMyLocation}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition"
        >
          Use my location
        </button>

        <span className="text-sm text-gray-700">
          {coords
            ? `Lat ${coords.lat.toFixed(3)}, Lng ${coords.lng.toFixed(3)}`
            : "Optional"}
        </span>
      </div>
    </section>
  );
}
