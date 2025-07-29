import Head from "next/head";

interface SchemaJsonLdProps {
    data: object | object[];
  }
  
  export default function SchemaJsonLd({ data }: SchemaJsonLdProps) {
    const jsonItems = Array.isArray(data) ? data : [data];    
  
    return (
        <Head>
        {jsonItems.map((item, index) => (
          <script
            key={item['@type']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </Head>
    );
  }
  