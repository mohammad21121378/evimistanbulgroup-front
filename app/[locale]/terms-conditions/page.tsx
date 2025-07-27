import TermsConditions from "@/screens/terms-conditions";
import { createGenerateMetadata } from "@/hooks/createGeneratePagesMetadata"

type Props = {
  params: { locale: string };
};

 export const generateMetadata = createGenerateMetadata("terms-conditions");

export default async function Page({ params }: Props) {

  return (
    <>
      <TermsConditions />
    </>
    )
}

