"use client";

import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import PropertyListing from "@/components/property-listing";
import { Loader } from "lucide-react";
import { PropertyRawType } from "@/types/Property";

const containerStyle = {
  width: "100%",
  height: "36rem",
  borderRadius: 16
};

type Props = {
  loadingData?: boolean;
  properties: PropertyRawType[]
}

function PropertyMap({ loadingData, properties }: Props) {
  console.log("render");


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMrYr9uVDCqL-7okyHX3RAIHvO5QUHSFI",
  });

  function position() {
    return {
      lat: 40.7 + Math.random() * 0.2,
    lng: 29 + Math.random() * 0.2,
    }
  }

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

  if (!isLoaded || loadingData) {
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
            position={{ lat: position().lat, lng: position().lng }}
            icon={{
              url: "/images/marker.svg",
              scaledSize: new google.maps.Size(svgSize, svgSize),
            }}
            onClick={(e) => {
              e.domEvent.stopPropagation();
              handleMarkerClick(property.id);
            }}
          >
            {selectedPropertyId === property.id && (
              <InfoWindowF
                position={{ lat: position().lat, lng: position().lng }}
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

export default PropertyMap;