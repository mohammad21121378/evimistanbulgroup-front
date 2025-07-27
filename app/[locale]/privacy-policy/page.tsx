import PrivacyPolicy from "@/screens/privacy-policy";
import { createGenerateMetadata } from "@/hooks/createGeneratePagesMetadata"

type Props = {
  params: { locale: string };
};

 export const generateMetadata = createGenerateMetadata("privacy-policy");

export default async function Page({ params }: Props) {

  return (
    <>
      <PrivacyPolicy />
    </>)
}

