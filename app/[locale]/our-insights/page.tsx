import OurInsights from "@/screens/our-insights/pages";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"


export const generateMetadata = createGenerateMetadata("our-insights");


export default function Home() {

    return <OurInsights />
}
