import AboutPage from "@/screens/about";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"
import SchemaJsonLd from "@/components/schema-json-ld";


export const generateMetadata = createGenerateMetadata("our-story");

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Evim istanbul group",
  "image": "https://evimistanbulgroup.com/_next/image?url=%2Fimages%2FEvimIstanbul%20Group%20Official%20LOGO.png&w=2048&q=75",
  "@id": "",
  "url": "https://evimistanbulgroup.com/en/our-story",
  "telephone": "905315186306",
  "priceRange": "0",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "E-5 Yanyolu",
    "addressLocality": "İstanbul",
    "postalCode": "34522",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0162503,
    "longitude": 28.6401235
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/evimistanbulgroup",
    "https://twitter.com/evimistanbulgroup",
    "https://www.linkedin.com/company/evimistanbulgroup",
    "https://www.youtube.com/@evimistanbulgroup",
    "https://www.instagram.com/evimistanbulgroup.official/"
  ]
};

export default function About() {
  return (
  <>
  <SchemaJsonLd data={schema} />

  <AboutPage />
  </>
  );
}
