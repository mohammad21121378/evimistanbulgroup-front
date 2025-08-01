import CategoriesComponent from "@/components/categories";

type CategoriesProps = {
    category?: string
}

export default function Categories({ category }: CategoriesProps) {
    return (
        <CategoriesComponent category={category} />
    );
}