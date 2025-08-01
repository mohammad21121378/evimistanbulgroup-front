// components/loaders/PropertyLoader.tsx

import Image from "next/image";
import React from "react";

const PropertyLoader = ({ count = 6 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl outline outline-slate-200 outline-1 shadow-sm overflow-hidden "
        >

          <div className="h-56 bg-slate-100  w-full relative ">
            <Image
              src={'/images/Property Placeholder.svg'} alt="Property Placeholder " className="animate-pulse-loader " fill />
          </div>

          <div className="p-4 space-y-3">
            <div className="h-6 bg-slate-100 rounded w-3/4 animate-shimmer" />
            <div className="h-5 bg-slate-100 rounded w-1/2 animate-shimmer" />
            <div className="h-3 bg-slate-100 rounded w-1/3 animate-shimmer" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyLoader;
