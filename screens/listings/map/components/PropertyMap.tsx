"use client";

import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useEffect, useMemo, useRef, useState } from "react";
import PropertyListing from "@/components/property-listing";
import { Loader } from "lucide-react";
import { PropertyRawType } from "@/types/Property";
import isEqual from "lodash.isequal";

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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMrYr9uVDCqL-7okyHX3RAIHvO5QUHSFI",
  });

  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const prevPropertiesRef = useRef<PropertyRawType[] | null>(null);

  useEffect(() => {
    const isSame = isEqual(prevPropertiesRef.current, properties);
    if (!isSame) {
      prevPropertiesRef.current = properties;
      setSelectedPropertyId(null);
    }
  }, [properties]);

  const mapRef = useRef<google.maps.Map | null>(null);

  const center = {
    lat: properties[0]?.latitude,
    lng: properties[0]?.longitude,
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
        const svgSize = selectedPropertyId === property.id ? 50 : 42
        return (
          <MarkerF
            key={property.id}
            position={{ lat: property.latitude, lng: property.longitude }}
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
                position={{ lat: property.latitude, lng: property.longitude }}
              >
                <div className="max-w-[17.5rem] md:max-h-[23rem] max-h-[25.5rem]">
                  <PropertyListing scale={.53} size="small" item={property} />
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