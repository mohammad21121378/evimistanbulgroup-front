import Layout from "@/components/Layout";
import Hero from "../hero";
import CategoriesAndInsights from "../insights/components/CategoriesAndInsights";

interface Props {
  category: string;
}

export default function InsightDetailsCategory({ category }: Props) {
  return (
    <Layout>
      <Hero category={category} />

      <CategoriesAndInsights category={category} />
    </Layout>
  );
}

