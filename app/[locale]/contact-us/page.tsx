import ContactUs from "@/screens/contact-us";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"


export const generateMetadata = createGenerateMetadata("contact-us");


export default function Contact() {
  return <ContactUs />;
}
