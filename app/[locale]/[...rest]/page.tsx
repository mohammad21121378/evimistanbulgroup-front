

// app/[locale]/[...rest]/page.tsx
import { notFound } from 'next/navigation';

export const metadata = 
{
    title: 'The desired page was not found'
}


export default function CatchAll404() {
  notFound();
}
