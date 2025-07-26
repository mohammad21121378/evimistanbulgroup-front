import LegalCorporate from "@/screens/legal-corporate";
import { createGenerateMetadata } from "@/hooks/createGeneratePagesMetadata"

 export const generateMetadata = createGenerateMetadata("legal-corporate");

export default async function Page() {

  return (
    <>
      <LegalCorporate />
    </>)
}

