"use client";

import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useLoadScript,
} from "@react-google-maps/api";
import { useProperties } from "../hooks/useProperties";
import { useRef, useState } from "react";
import PropertyListing from "@/components/property-listing";
import { Loader } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "33rem",
  borderRadius: 16
};

export default function PropertyMap() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMrYr9uVDCqL-7okyHX3RAIHvO5QUHSFI",
  });

  const { properties } = useProperties();

  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const center = {
    lat: 40.73,
    lng: 29.0,
  };

  const handleMapClick = () => {
    setSelectedPropertyId(null); 
  };

  const handleMarkerClick = (id: number) => {
    setSelectedPropertyId(id);
  };

  if (!isLoaded) {
    return (
      <div
        style={containerStyle}
        className="flex items-center justify-center bg-slate-100 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-50 to-slate-400" />
        <div className="relative z-10 flex items-center gap-2.5">
          <Loader className="animate-spin" />
          <p className="text-lg text-gray-600 font-medium">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      onLoad={(map) => {
        mapRef.current = map;
      }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onClick={handleMapClick}
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        clickableIcons: false,
      }}
    >
      {properties.map((property) => {
        const svgSize = selectedPropertyId === property.id ? 50 : 36
        return (
        <MarkerF
          key={property.id}
          position={{ lat: property.lat, lng: property.lng }}
          icon={{
            url: "/images/marker.svg",
            scaledSize: new google.maps.Size(svgSize , svgSize),
          }}
          onClick={(e) => {
            e.domEvent.stopPropagation();
            handleMarkerClick(property.id);
          }}
        >
          {selectedPropertyId === property.id && (
            <InfoWindowF
              position={{ lat: property.lat, lng: property.lng }}
            >
              <div className="max-w-[17.5rem] md:max-h-[22rem] max-h-[24rem]">
                <PropertyListing scale={.5} size="small" item={property} />
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
        )
})}
    </GoogleMap>
  );
}
