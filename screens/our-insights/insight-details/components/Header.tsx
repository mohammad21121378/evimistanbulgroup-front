import './tabel-of-content.css'

import classes from "./styles.module.css";
import classNames from "classnames";
import ArticleShare from "./ArticleShare";
import { Article } from "@/types/Article";
import Link from '@/components/ui/Link';


interface Props {
    article: Article;
    readingTime: number;
}

export default function Header({ article, readingTime }: Props) {
    return (
        <div className="mt-4 text-[#111111] font-medium">
            <div className="relative bigInsightItem">
                <img
                    src={article.media?.url}
                    alt={article.media?.alt}
                    className="w-100 rounded-xl"
                />
            </div>
            <h1 className={classNames(classes.titleBig, '')}>{article.title}</h1>

            <div className="md:flex md:justify-between items-center md:mt-5 mt-7 ">

                <ul className="inline-flex flex-wrap sm:list-disc items-center md:gap-8 gap-3 text-sm">
                    <Link
                        href={`/our-insights/${article.category[0]?.url}`}
                        className={`px-2 py-1 rounded font-medium text-white bg-blue-700 text-base w-fit`}
                    >
                        {article.category[0]?.title}
                    </Link>
                    <li>{readingTime} min read</li>
                    <li>{article.created_at}</li>
                    <li className=''>Posted by: <Link className='text-orange-500 underline capitalize font-bold' href={article.author.url ?? '/'} > {article.author?.name} {article.author?.last_name} </Link></li>
                </ul>

                <ArticleShare article={article} />
            </div>
        </div>
    );
}
