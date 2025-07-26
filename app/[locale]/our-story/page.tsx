import AboutPage from "@/screens/about";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"


export const generateMetadata = createGenerateMetadata("our-story");


export default function About() {
  return <AboutPage />;
}
