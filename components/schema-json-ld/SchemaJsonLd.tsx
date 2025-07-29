interface SchemaJsonLdProps {
    data: object | object[];
  }
  
  export default function SchemaJsonLd({ data }: SchemaJsonLdProps) {
    const jsonItems = Array.isArray(data) ? data : [data];
  
    return (
        <head>
        {jsonItems.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </head>
    );
  }
  