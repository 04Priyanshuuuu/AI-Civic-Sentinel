"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useAnalyzeStore } from "@/src/store/useAnalyzeStore";

// 🔧 Leaflet icon fix
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Props = {
  lat: number;
  lng: number;
};

export default function LocationMap({ lat, lng }: Props) {
  const setLocation = useAnalyzeStore((s) => s.setLocation);

  return (
    <div className="w-full h-[280px] rounded-xl overflow-hidden border">
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[lat, lng]}
          draggable={true}
          eventHandlers={{
            dragend: (e) => {
              const marker = e.target;
              const pos = marker.getLatLng();

              // 🔥 STORE UPDATE HERE
              setLocation({
                lat: pos.lat,
                lng: pos.lng,
              });
            },
          }}
        >
          <Popup>
            📍 Drag marker to adjust location <br />
            Lat: {lat.toFixed(4)} <br />
            Lng: {lng.toFixed(4)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
