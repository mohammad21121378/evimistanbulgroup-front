import InsightDetailsCategory from "@/screens/our-insights/pages/InsightDetailsCategory";
import {createGenerateCategoriesMetadata} from "@/hooks/createGenerateCategoriesMetadata"
import { fetchCategoryDetail } from "@/helpers/api/category-detail";
import {notFound} from "next/navigation";


type SearchParams = {
  page?: number;
};
interface Props {
  params: {
    category: string;
    locale: string;
  };
  searchParams: SearchParams;
}

export const generateMetadata = createGenerateCategoriesMetadata();
export default async function Page({ params,searchParams }: Props) {
  const { page } = searchParams;
  const { locale, category } = params;
  const { data: categoryData } = await fetchCategoryDetail(category,20,page, locale);

  if (!categoryData) return notFound();

  return <InsightDetailsCategory category={category} categoryData={categoryData} />;
}
