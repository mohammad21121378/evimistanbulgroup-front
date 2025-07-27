import Layout from "@/components/Layout";
import Hero from "./hero";
import Overview from "./overview";
import RelatedProperties from "./related-properties";
import RelatedInsights from "./related-insights";

export default function PropertyDetailPage({ item,related }: any) {

  return (
    <Layout>
      <Hero item={item} />
      <Overview item={item} />
      <RelatedProperties related={related} item={item} />
      <RelatedInsights articles={item.articles} />
    </Layout>
  );
}
