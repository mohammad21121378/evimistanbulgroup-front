import Layout from "@/components/Layout";
import Hero from "../hero";
import Categories from "../categories/Categories";
import Insights from "../insights/components/Insights";

interface Props {
  category: string;
}

export default function InsightDetailsCategory({ category }: Props) {
  return (
    <Layout>
      <Hero category={category} />
      <Categories category={category} />
      <Insights />
    </Layout>
  );
}

