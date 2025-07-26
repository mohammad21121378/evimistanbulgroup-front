import Categories from "@/components/categories";
import Insights from "./Insights";
import {Article} from "../../../../types/Article";

type Props = {
    category?: string | null;
    last_page: number;
    articles: Article[];
}

export default function CategoriesAndInsights({ category,articles,last_page }: Props) {
    return (
        <div className="container py-10">
            <div className="grid md:grid-cols-11 grid-cols-1 gap-10 xl:gap-16">
                <div className="md:col-span-3">
                    <Categories category={category} />
                </div>
                <div className="md:col-span-8">
                    <Insights category={category} last_page={last_page} articles={articles} />
                </div>
            </div>
        </div>
    );
}