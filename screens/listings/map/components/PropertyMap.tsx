// "use client";

// import {
//   GoogleMap,
//   MarkerF,
//   InfoWindowF,
//   useLoadScript,
// } from "@react-google-maps/api";
// import React, { useEffect, useRef, useState } from "react";
// import PropertyListing from "@/components/property-listing";
// import { Loader } from "lucide-react";
// import { PropertyRawType } from "@/types/Property";
// import isEqual from "lodash.isequal";

// const containerStyle = {
//   width: "100%",
//   height: "35rem",
//   borderRadius: 16,
// };

// type Props = {
//   loadingData?: boolean;
//   properties: PropertyRawType[];
// };

// function PropertyMap({ loadingData, properties }: Props) {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDMrYr9uVDCqL-7okyHX3RAIHvO5QUHSFI",
//   });

//   const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
//   const mapRef = useRef<google.maps.Map | null>(null);
//   const initialCenterRef = useRef<null | { lng: number; lat: number }>(null);

//   const fallbackCenter = { lat: 41.0082, lng: 28.9784 };

//   const firstValidProperty = properties.find(
//     (p) => p.latitude !== null && p.longitude !== null
//   );

//   const selectedProperty = properties.find(
//     (p) => p.id === selectedPropertyId && p.latitude !== null && p.longitude !== null
//   );


//   const istanbulProperty = properties?.find(
//     (p) =>
//       (p.parentLocation?.toLowerCase() === "Istanbul".toLowerCase()) &&
//       p.latitude !== null &&
//       p.longitude !== null
//   );

//   const initialCenter = istanbulProperty
//     ? { lat: istanbulProperty.latitude!, lng: istanbulProperty.longitude! }
//     : firstValidProperty
//       ? { lat: firstValidProperty.latitude!, lng: firstValidProperty.longitude! }
//       : fallbackCenter;

//   const [center, setCenter] = useState(initialCenter);

//   useEffect(() => {

//     if (!isEqual(initialCenterRef?.current, initialCenter)) {
//       initialCenterRef.current = initialCenter;
//       mapRef.current?.panTo(initialCenter);
//       setCenter(initialCenter);
//     }

//   }, [initialCenter]);

//   useEffect(() => {
//     setSelectedPropertyId(null)
//   }, [properties]);

//   useEffect(() => {
//     if (selectedProperty && mapRef.current) {
//       mapRef.current.panTo({
//         lat: selectedProperty.latitude!,
//         lng: selectedProperty.longitude!,
//       });
//       setCenter({
//         lat: selectedProperty.latitude!,
//         lng: selectedProperty.longitude!,
//       });
//     }
//   }, [selectedPropertyId]);

//   const handleMapClick = () => {
//     setSelectedPropertyId(null);
//   };

//   const handleMarkerClick = (id: number) => {
//     setSelectedPropertyId(id);
//   };

//   if (!isLoaded || loadingData) {
//     return (
//       <div
//         style={containerStyle}
//         className="flex items-center justify-center bg-slate-100 rounded-2xl relative overflow-hidden"
//       >
//         <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-50 to-slate-400" />
//         <div className="relative z-10 flex items-center gap-2.5">
//           <Loader className="animate-spin" />
//           <p className="text-lg text-gray-600 font-medium">Loading map...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <GoogleMap
//       onLoad={(map) => {
//         mapRef.current = map;
//       }}
//       mapContainerStyle={containerStyle}
//       zoom={11}
//       center={center}
//       onClick={handleMapClick}
//       options={{
//         fullscreenControl: false,
//         streetViewControl: false,
//         clickableIcons: false,
//       }}
//     >
//       {properties.map((property) => {

//         if (property.latitude === null || property.longitude === null) return null;

//         const isSelected = selectedPropertyId === property.id;
//         const svgSize = isSelected ? 50 : 42;

//         return (
//           <MarkerF
//             key={property.id}
//             position={{ lat: property.latitude, lng: property.longitude }}
//             icon={{
//               url: "/images/marker.svg",
//               scaledSize:
//                 typeof window !== "undefined" && window.google
//                   ? new window.google.maps.Size(svgSize, svgSize)
//                   : undefined,
//             }}
//             onClick={(e) => {
//               e.domEvent.stopPropagation();
//               handleMarkerClick(property.id);
//             }}
//           >
//             {isSelected && (
//               <InfoWindowF
//                 position={{ lat: property.latitude as number, lng: property.longitude as number }}
//               >
//                 <div className="max-w-[17.5rem] md:max-h-[23rem] max-h-[25.5rem]">
//                   <PropertyListing scale={0.53} size="small" item={property} />
//                 </div>
//               </InfoWindowF>
//             )}
//           </MarkerF>
//         );
//       })}
//     </GoogleMap>
//   );
// }

// export default PropertyMap;

"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useLoadScript,
  Autocomplete,
  HeatmapLayerF,
  DrawingManager,
  MarkerClusterer,
} from "@react-google-maps/api";

import { Loader } from "lucide-react";
import { PropertyRawType } from "@/types/Property";
import PropertyListing from "@/components/property-listing";
import { MarkerClusterer as GCMarkerClusterer } from "@googlemaps/markerclusterer";
import { onChangeType } from "../../types";
import { FaChevronLeft } from "react-icons/fa6";

declare global {
  namespace google.maps {
    export type MarkerClusterer = InstanceType<typeof GCMarkerClusterer>;
  }
}

const DEFAULT_CENTER = { lat: 41.0082, lng: 28.9784 };
const DEFAULT_ZOOM = 10;

type Props = {
  loadingData?: boolean;
  properties: PropertyRawType[];
  onChangeType: onChangeType
};

type ShapeInfo = {
  shape: google.maps.Polygon | google.maps.Circle | google.maps.Rectangle;
  type: "polygon" | "circle" | "rectangle";
  id: string;
};

function makeClusterSvg(count: number) {
  const baseCircle = `
    <circle cx="19" cy="19" r="19" fill="#fff"/>
    <circle cx="19" cy="19" r="17" fill="#169AAC"/>
  `;
  const label = `
    <text x="50%" y="50%" dy=".35em" text-anchor="middle" font-size="12" font-family="Arial" fill="white" font-weight="bold">
      ${count}
    </text>
  `;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
    ${baseCircle}
    ${label}
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function pointInShape(
  latLng: google.maps.LatLngLiteral,
  shapeInfo: ShapeInfo
): boolean {
  const { shape, type } = shapeInfo;
  if (type === "polygon") {
    return window.google.maps.geometry.poly.containsLocation(
      new window.google.maps.LatLng(latLng),
      shape as google.maps.Polygon
    );
  }
  if (type === "circle") {
    const circle = shape as google.maps.Circle;
    return (
      window.google.maps.geometry.spherical.computeDistanceBetween(
        new window.google.maps.LatLng(latLng),
        circle.getCenter()!
      ) <= circle.getRadius()
    );
  }
  if (type === "rectangle") {
    const bounds = (shape as google.maps.Rectangle).getBounds();
    return bounds?.contains(new window.google.maps.LatLng(latLng)) || false;
  }
  return false;
}

const PropertyMap: React.FC<Props> = ({ loadingData, properties, onChangeType }) => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMrYr9uVDCqL-7okyHX3RAIHvO5QUHSFI",
    libraries: ["drawing", "places", "geometry", "visualization"],
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [shapes, setShapes] = useState<ShapeInfo[]>([]);
  const [activeShapeId, setActiveShapeId] = useState<string | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [searchBox, setSearchBox] = useState<google.maps.places.Autocomplete | null>(null);
  const [filteredProperties, setFilteredProperties] = useState<PropertyRawType[]>(properties);
  const clustererRef = useRef<GCMarkerClusterer | null>(null);

  const [clusterer, setClusterer] = useState<google.maps.MarkerClusterer | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const handleClustererLoad = useCallback(
    (c: google.maps.MarkerClusterer) => {
      setClusterer(c);
    },
    []
  );

  const getScaledSize = (size: number) => {
    if (typeof window === "undefined" || !window.google?.maps?.Size) return undefined;
    return new window.google.maps.Size(size, size);
  };

  // useEffect(() => {
  //   if (!mapRef.current || !window.google) return;

  //   // clustererRef.current?.clearMarkers();

  //   // const markers = filteredProperties
  //   //   .filter((p) => p.latitude !== null && p.longitude !== null)
  //   //   .map((p) => {
  //   //     const isSelected = selectedPropertyId === p.id;
  //   //     const size = isSelected ? 50 : 42;
  //   //     const marker = new window.google.maps.Marker({
  //   //       position: { lat: p.latitude!, lng: p.longitude! },
  //   //       icon: {
  //   //         url: "/images/marker.svg",
  //   //         scaledSize: new window.google.maps.Size(size, size),
  //   //       },
  //   //     });

  //   //     marker.addListener("click", (e: google.maps.MapMouseEvent) => {
  //   //       setSelectedPropertyId(p.id);

  //   //     });

  //   //     return marker;
  //   //   });

  //   // const clusterer = new GCMarkerClusterer({
  //     // map: mapRef.current,
  //     // markers,
  //     // renderer: {
  //     //   render: ({ count, position }) => {
  //     //     return new window.google.maps.Marker({
  //     //       position,
  //     //       icon: {
  //     //         url: makeClusterSvg(count),
  //     //         scaledSize: new window.google.maps.Size(38, 38),
  //     //       },
  //     //     });
  //     //   },
  //     // },
  //   // });

  //   clustererRef.current = clusterer as any;

  //   return () => {
  //     clusterer.clearMarkers();
  //   };
  // }, [filteredProperties, selectedPropertyId]);

  useEffect(() => {
    if (!selectedProperty || !mapRef.current) return;
    const existingMarker = clustererRef.current
      ?
      null
      : null;
  }, [selectedPropertyId]);

  const firstValidProperty = useMemo(
    () => properties.find((p) => p.latitude !== null && p.longitude !== null),
    [properties]
  );
  const istanbulProperty = useMemo(
    () =>
      properties.find(
        (p) =>
          p.parentLocation?.toLowerCase() === "istanbul" &&
          p.latitude !== null &&
          p.longitude !== null
      ),
    [properties]
  );
  const initialCenter = useMemo(
    () =>
      istanbulProperty
        ? { lat: istanbulProperty.latitude!, lng: istanbulProperty.longitude! }
        : firstValidProperty
          ? { lat: firstValidProperty.latitude!, lng: firstValidProperty.longitude! }
          : DEFAULT_CENTER,
    [istanbulProperty, firstValidProperty]
  );
  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  useEffect(() => {
    setFilteredProperties(properties);
    setSelectedPropertyId(null);
  }, [properties]);

  useEffect(() => {
    if (!mapRef.current) return;
    const bounds = new window.google.maps.LatLngBounds();
    filteredProperties.forEach((p) => {
      if (p.latitude !== null && p.longitude !== null) {
        bounds.extend({ lat: p.latitude, lng: p.longitude });
      }
    });
    if (!bounds.isEmpty()) {
      mapRef.current.fitBounds(bounds, 80);
    }
  }, [filteredProperties]);

  // useEffect(() => {
  //   if (shapes.length === 0) {
  //     setFilteredProperties(properties);
  //     return;
  //   }
  //   const filtered = properties.filter((p) => {
  //     if (p.latitude === null || p.longitude === null) return false;
  //     return shapes.some((shapeInfo) =>
  //       pointInShape({ lat: p.latitude, lng: p.longitude }, shapeInfo)
  //     );
  //   });
  //   setFilteredProperties(filtered);
  // }, [shapes, properties]);

  useEffect(() => {
    if (shapes.length === 0) {
      setFilteredProperties(properties);
      return;
    }

    const filtered = properties.filter((p) => {
      const { latitude, longitude } = p;
      if (latitude == null || longitude == null) return false; // اینجا narrow می‌کنه

      return shapes.some((shapeInfo) =>
        pointInShape({ lat: latitude, lng: longitude }, shapeInfo)
      );
    });

    setFilteredProperties(filtered);
  }, [shapes, properties /* اگر متغیر checked هم اینجا استفاده می‌شه، حتماً اضافه‌اش کن */]);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const selectedProperty = useMemo(
    () => properties.find((p) => p.id === selectedPropertyId),
    [selectedPropertyId, properties]
  );

  useEffect(() => {
    if (
      selectedProperty &&
      mapRef.current &&
      selectedProperty.latitude &&
      selectedProperty.longitude
    ) {
      const pos = { lat: selectedProperty.latitude, lng: selectedProperty.longitude };
      mapRef.current.panTo(pos);
      setCenter(pos);
      setZoom(15);
    }
  }, [selectedProperty]);

  const handleMarkerClick = (id: number, e: google.maps.MapMouseEvent) => {
    e.domEvent.stopPropagation();
    setSelectedPropertyId(id);
    setZoom(15);
  };

  const handleMapClick = () => {
    setSelectedPropertyId(null);
  };

  const onPlaceChanged = () => {
    if (!searchBox) return;
    const place = searchBox.getPlace();
    if (!place.geometry || !place.geometry.location) return;
    const loc = place.geometry.location;
    mapRef.current?.panTo({ lat: loc.lat(), lng: loc.lng() });
    mapRef.current?.setZoom(15);
  };

  const onOverlayComplete = (e: google.maps.drawing.OverlayCompleteEvent) => {
    const overlay = e.overlay;
    let shapeType: ShapeInfo["type"];
    if (e.type === window.google.maps.drawing.OverlayType.POLYGON) shapeType = "polygon";
    else if (e.type === window.google.maps.drawing.OverlayType.RECTANGLE) shapeType = "rectangle";
    else if (e.type === window.google.maps.drawing.OverlayType.CIRCLE) shapeType = "circle";
    else return;

    const id = crypto.randomUUID();
    const shapeObj: ShapeInfo = { shape: overlay as any, type: shapeType, id };

    if ("setEditable" in overlay) {
      (overlay as any).setEditable(true);
    }

    const updateShape = () => {
      setShapes((prev) =>
        prev.map((s) => (s.id === id ? { ...s, shape: overlay as any } : s))
      );
    };

    if (shapeType === "polygon") {
      const poly = overlay as google.maps.Polygon;
      poly.getPath().addListener("set_at", updateShape);
      poly.getPath().addListener("insert_at", updateShape);
      poly.getPath().addListener("remove_at", updateShape);
    } else if (shapeType === "rectangle") {
      (overlay as google.maps.Rectangle).addListener("bounds_changed", updateShape);
    } else if (shapeType === "circle") {
      const circ = overlay as google.maps.Circle;
      circ.addListener("center_changed", updateShape);
      circ.addListener("radius_changed", updateShape);
    }

    overlay.addListener("click", () => setActiveShapeId(id));
    setShapes((prev) => [...prev, shapeObj]);
  };

  const removeShape = (id: string) => {
    setShapes((prev) => {
      const toRemove = prev.find((s) => s.id === id);
      if (toRemove) toRemove.shape.setMap(null);
      return prev.filter((s) => s.id !== id);
    });
    if (activeShapeId === id) setActiveShapeId(null);
  };

  const clearAllShapes = () => {
    shapes.forEach((s) => s.shape.setMap(null));
    setShapes([]);
    setActiveShapeId(null);
  };

  if (loadError) {
    return <div>Failed to load map</div>;
  }

  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  };

  if (!isLoaded || loadingData) {
    return (
      <div
        className="flex fixed h-[calc(100vh-10.2rem)] bottom-0 left-0 right-0 items-center justify-center bg-slate-100 rounded-2xl overflow-hidden"
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
    <div className="flex fixed h-[calc(100vh-10.2rem)] z-40 right-0 left-0 bottom-0 w-full" style={{ borderTop: '1px solid rgb(216 216 216 / 46%)' }}>

      <div className="w-[45%] h-[calc(100vh-10.2rem)] bg-white space-y-2 overflow-hidden">

        <div className="flex items-center justify-between p-2 bg-white font-medium">
          {/* <div className="flex gap-2">
            <button onClick={() => setShowHeatmap((s) => !s)} className="px-3 py-1 border rounded">
              {showHeatmap ? "Hide Heatmap" : "Heatmap Display"}
            </button>
            <button onClick={clearAllShapes} className="px-3 py-1 border rounded">
              Erase shapes
            </button>
          </div>
          <div className="text-sm text-gray-600 font-bold">
            {filteredProperties.length} The item is displayed
          </div> */}

          <div className="flex items-center text-base gap-0.5 mt-1 pl-1 text-gray-700 transition-all hover:text-orange-600 cursor-pointer font-bold" onClick={() => onChangeType('list')}>

            <FaChevronLeft className="text-sm" />

            <div>
              Return to property list
            </div>

          </div>

        </div>

        <hr className="bg-gray-200" />

        <div className="space-y-1 p-2 grid grid-cols-2 gap-2 overflow-auto scrollbar-sm max-h-[calc(100vh-14.5rem)]">
          {filteredProperties.map((property) => (
            <div
              key={property.id}

              onMouseEnter={() => {
                if (hoverTimerRef.current) {
                  clearTimeout(hoverTimerRef.current);
                }
                hoverTimerRef.current = window.setTimeout(() => {
                  setSelectedPropertyId(property.id);
                  setZoom(15);
                }, 400);
              }}

              onMouseLeave={() => {
                if (hoverTimerRef.current) {
                  clearTimeout(hoverTimerRef.current);
                  hoverTimerRef.current = null;
                }
                setSelectedPropertyId(null);
                setZoom(15);
              }}

              className={` pb-1.5 p-1 bg-white rounded-xl shadow flex gap-2 cursor-pointer ${selectedPropertyId === property.id ? "ring-2 ring-orange-500" : "cursor-progress"
                }`}
              onClick={() => { setSelectedPropertyId(property.id); setZoom(15) }}
            >
              <PropertyListing imgLinkClassName={selectedPropertyId === property.id ? "" : "cursor-progress"} wrapperClassName="!w-full !h-[22.1rem]" size="small" scale={.68} item={property} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[55%] relative">

        <div className="absolute top-20 left-4 z-20 flex gap-2">
          {/* <Autocomplete onLoad={(auto) => setSearchBox(auto)} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Ssearch location..."
              className="w-60 px-3 py-2 rounded shadow border"
            />
          </Autocomplete>
          <button
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                  mapRef.current?.panTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
                  mapRef.current?.setZoom(14);
                });
              }
            }}
            className="px-3 py-2 bg-white rounded shadow"
          >
            موقعیت من
          </button> */}
        </div>

        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onClick={handleMapClick}
          options={{ fullscreenControl: true, streetViewControl: true, clickableIcons: true }}
        >

          <MarkerClusterer>
            {(clusterer) => (
              <>
                {filteredProperties.map((property) => {
                  if (property.latitude == null || property.longitude == null) return null;
                  const isSelected = selectedPropertyId === property.id;
                  const svgSize = isSelected ? 50 : 42;
                  return (
                    <MarkerF
                      key={property.id}
                      position={{ lat: property.latitude, lng: property.longitude }}
                      clusterer={clusterer}
                      icon={{
                        url: "/images/marker.svg",
                        scaledSize: getScaledSize(svgSize),
                      }}
                      onClick={(e) => handleMarkerClick(property.id, e)}
                    >
                      {isSelected && (
                        <InfoWindowF onCloseClick={() => setSelectedPropertyId(null)}>
                          <div className="max-w-[17.5rem] md:max-h-[23rem] max-h-[25.5rem]">
                            <PropertyListing scale={0.53} size="small" item={property} />
                          </div>
                        </InfoWindowF>
                      )}
                    </MarkerF>
                  );
                })}
              </>
            )}
          </MarkerClusterer>


          {/* Heatmap */}
          {showHeatmap && filteredProperties.length > 0 && (
            <HeatmapLayerF
              data={filteredProperties
                .filter((p) => p.latitude !== null && p.longitude !== null)
                .map(
                  (p) => new google.maps.LatLng(p.latitude as number, p.longitude as number)
                )}
              options={{
                radius: 30,
                opacity: 0.7,
              }}
            />
          )}

          {/* Drawing tools */}
          <DrawingManager
            onLoad={() => { }}
            onOverlayComplete={onOverlayComplete}
            options={{
              drawingControl: true,
              drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                  google.maps.drawing.OverlayType.CIRCLE,
                ],
              },
              polygonOptions: {
                editable: true,
                draggable: false,
              },
              rectangleOptions: {
                editable: true,
                draggable: false,
              },
              circleOptions: {
                editable: true,
                draggable: false,
              },
            }}
          />
        </GoogleMap>

        {/* Shape list / actions */}
        {shapes.length > 0 && (
          <div className="absolute bottom-4 left-4 z-30 bg-white p-3 rounded-xl shadow flex flex-col gap-2 max-w-[300px]">
            <div className="font-semibold">Active shapes:</div>
            {shapes.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between bg-slate-50 px-2 py-1 rounded"
              >
                <div className="text-sm">{s.type}</div>
                <div className="flex gap-1">
                  <button
                    onClick={() => removeShape(s.id)}
                    className="text-red-500 text-xs px-2 py-1 border rounded"
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyMap;
