import Layout from "@/components/Layout";
import Hero from "../hero";
import CategoriesAndInsights from "../insights/components/CategoriesAndInsights";

export default function OurInsights({articles,page}) {
  return (
    <Layout>
      <Hero page={page} />
      <CategoriesAndInsights articles={articles} />
    </Layout>
  );
}
