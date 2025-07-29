// interface SchemaJsonLdProps {
//     data: object | object[];
//   }
  
//   export default function SchemaJsonLd({ data }: SchemaJsonLdProps) {
//     const jsonItems = Array.isArray(data) ? data : [data];    
  
//     return (
//         <head>
//         {jsonItems.map((item, index) => (
//           <script
//             key={item['@type']}
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
//           />
//         ))}
//       </head>
//     );
//   }

interface SchemaJsonLdProps {
    data: object | object[];
  }
  

import Script from 'next/script';

export default function SchemaJsonLd({ data }: SchemaJsonLdProps) {
  const jsonItems = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonItems.map((item, index) => (
        <Script
          key={index}
          id={`schema-${item['@type']}-${index}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
