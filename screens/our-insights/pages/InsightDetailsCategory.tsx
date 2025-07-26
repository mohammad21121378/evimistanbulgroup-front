import Layout from "@/components/Layout";
import Hero from "../hero";
import CategoriesAndInsights from "../insights/components/CategoriesAndInsights";
import {Article} from "../../../types/Article";

interface Props {
    category:string;
    categoryData:{
        articles:Article[],
        content: string;
        title: string;
        pagination:{
            last_page:number
        }
    };

}

export default function InsightDetailsCategory({ categoryData,category }: Props) {
  return (
    <Layout>
      <Hero page={categoryData} category={true}  />

      <CategoriesAndInsights last_page={categoryData.pagination.last_page} articles={categoryData.articles} category={category}  />
    </Layout>
  );
}

