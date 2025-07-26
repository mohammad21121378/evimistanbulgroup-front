import Layout from "@/components/Layout";
import Hero from "../hero";
import CategoriesAndInsights from "../insights/components/CategoriesAndInsights";
import {Article} from "../../../types/Article";


interface Props {
    articles:{
        articles:Article[];
        pagination:{
            last_page:number
        }
    },
    page:{
        content: string;
        title: string;
    }
}

export default function OurInsights({articles,page}:Props) {
    return (
        <Layout>
            <Hero page={page} />
            <CategoriesAndInsights  last_page={articles?.pagination?.last_page} articles={articles.articles} />
        </Layout>
    );
}
