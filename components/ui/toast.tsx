'use client';

import { Toaster } from 'react-hot-toast';

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        success: {
          style: {
            backgroundColor: '#22c55e', // green-500
            color: 'white',
            borderRadius: '5px',
          },
          icon: null,
        },
        error: {
          style: {
            backgroundColor: '#ef4444', // red-500
            color: 'white',
            borderRadius: '5px',
          },
          icon: null,
        },
        blank: {
          style: {
            backgroundColor: '#3b82f6', // blue-500
            color: 'white',
            borderRadius: '5px',
          },
          icon: null,
        },
      }}
    />
  );
}
