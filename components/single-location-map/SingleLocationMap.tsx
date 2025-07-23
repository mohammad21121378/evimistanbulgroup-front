// components/SingleLocationMap.tsx

"use client";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Loader } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "20rem",
  borderRadius: 16,
};

type Props = {
  lat: number;
  lng: number;
};

export default function SingleLocationMap({ lat, lng }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMrYr9uVDCqL-7okyHX3RAIHvO5QUHSFI",
  });

  if (!isLoaded) {
    return (
      <div
        style={containerStyle}
        className="flex items-center justify-center bg-slate-100 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-50 to-slate-400" />
        <div className="relative z-10 flex items-center gap-2.5">
          <Loader className="animate-spin" />
          <p className="text-gray-600 text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={13}
      center={{ lat, lng }}
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        clickableIcons: false,
      }}
    >
      <MarkerF
        position={{ lat, lng }}
        icon={{
          url: "/images/gps-icon.svg",
          scaledSize: new window.google.maps.Size(42, 42),
        }}
      />
    </GoogleMap>
  );
}
