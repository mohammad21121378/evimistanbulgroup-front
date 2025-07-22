// components/loaders/PropertyLoader.tsx

import React from "react";

const PropertyLoader = ({ count = 6 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl outline outline-gray-200 outline-1 shadow-sm overflow-hidden animate-pulse"
        >
          <div className="h-48 bg-gray-200 w-full" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyLoader;
