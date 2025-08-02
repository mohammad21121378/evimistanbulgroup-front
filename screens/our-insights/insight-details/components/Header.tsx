import './tabel-of-content.css'

import classes from "./styles.module.css";
import classNames from "classnames";
import ArticleShare from "./ArticleShare";
import { Article } from "@/types/Article";
import Link from '@/components/ui/Link';


interface Props {
    article: Article;
}

export default function Header({ article }: Props) {
    return (
        <div className="mt-4 text-[#111111] font-medium">
            <div className="relative bigInsightItem">
                <img
                    src={article.media?.url}
                    alt={article.media?.alt}
                    className="w-full rounded-xl h-[57.5vh] object-cover object-center"
                />
            </div>
            <h1 className={classNames(classes.titleBig, '')}>{article.title}</h1>

            <div className="md:flex md:justify-between items-center md:mt-5 mt-7 ">

                <ul className="inline-flex flex-wrap sm:list-disc items-center md:gap-8 gap-3 text-sm">
                    <Link
                        href={`/our-insights/${article.CatSlug}`}
                        className={`px-2 py-1 rounded font-medium text-white bg-blue-700 text-base w-fit`}
                    >
                        {article.CatName}
                    </Link>
                    <li>{article.timeToRead} min read</li>
                    <li>{article.created_at}</li>
                    <li className=''>Posted by: <Link className='text-orange-500 underline capitalize font-bold' href={"/our-story"} >EvimIstanbul Group</Link></li>
                </ul>

                <ArticleShare article={article} />
                
            </div>
        </div>
    );
}
