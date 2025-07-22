// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { useEffect, useMemo, useRef } from 'react';
// import isEqual from 'lodash.isequal';

// export function useSyncLocationFromURL(
//   setLocationsSelected: (value: string[]) => void,
//   currentValue: string[]
// ) {
//   const searchParams = useSearchParams();

//   const location = useMemo(() => searchParams.get('location'), [searchParams]);

//   const locationsFromURL = useMemo(() => {
//     return location ? location.split(',') : [];
//   }, [location]);

//   const prevValueRef = useRef(currentValue);

//   useEffect(() => {
//     if (!isEqual(prevValueRef.current, locationsFromURL)) {

//       prevValueRef.current = locationsFromURL;
//       setLocationsSelected(locationsFromURL);
//     }
//   }, [locationsFromURL, setLocationsSelected]);
// }



'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import isEqual from 'lodash.isequal';

export function useSyncFilterFromURL(
  paramName: string,
  setSelected: (value: string[]) => void,
  currentValue: string[],
  onFilter: (value: string[]) => void
) {
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  const paramValue = useMemo(() => searchParams.get(paramName), [searchParams, paramName]);

  const valuesFromURL = useMemo(() => {
    return paramValue ? paramValue.split(',') : [];
  }, [paramValue]);

  const prevValueRef = useRef(currentValue);

  useEffect(() => {


    if (!isEqual(prevValueRef.current, valuesFromURL)) {
      prevValueRef.current = valuesFromURL;
      
      setSelected(valuesFromURL);
      if (!isFirst.current && valuesFromURL.length) {        
        onFilter(valuesFromURL)
      }
    }

    if (isFirst.current) {
      isFirst.current = false;
    }


  }, [valuesFromURL, setSelected, onFilter]);
}
