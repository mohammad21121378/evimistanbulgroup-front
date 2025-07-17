"use client";

import { SearchProvider } from "../context/search-context";
import { Toaster } from 'react-hot-toast';

export function Providers({ children }) {
  return <SearchProvider>
    <Toaster position="top-center" reverseOrder={false} />
    {children}
    </SearchProvider>;
}
