import LegalCorporate from "@/screens/legal-corporate";
import { createGenerateMetadata } from "@/hooks/createGeneratePagesMetadata"

type Props = {
  params: { locale: string };
};

 export const generateMetadata = createGenerateMetadata("legal-corporate");

export default async function Page({ params }: Props) {

  return (
    <>
      <LegalCorporate />
    </>)
}

