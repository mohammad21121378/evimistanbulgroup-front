import Categories from "@/components/categories";
import Insights from "./Insights";

type Props = {
    category?: string
}

export default function CategoriesAndInsights({ category }: Props) {
    return (
        <div className="container py-10">
            <div className="grid md:!grid-cols-12 grid-cols-1">
                <div className="md:col-span-4">
                    <Categories category={category} />
                </div>
                <div className="md:col-span-8">
                    <Insights />
                </div>
            </div>
        </div>
    );
}