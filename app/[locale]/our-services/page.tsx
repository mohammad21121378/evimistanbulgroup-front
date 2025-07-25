import OurServices from "@/screens/our-services";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"


export const generateMetadata = createGenerateMetadata("our-services");


export default function page() {
    return <OurServices />;
}