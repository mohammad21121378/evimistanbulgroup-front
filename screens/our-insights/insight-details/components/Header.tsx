import Image from "next/image";
import Link from "next/link";
import classes from "./styles.module.css";
import classNames from "classnames";
import './tabel-of-content.css'


interface Props {
    article: any;
    readingTime: number;
    setShowClipboardMessage: (v: boolean) => void;
}

export default function Header({ article, readingTime, setShowClipboardMessage }: Props) {
    return (
        <div className="mt-4 text-gray-700">
            <div className="relative bigInsightItem">
                <img
                    src={article.media?.url}
                    alt={article.media?.alt}
                    className="w-100 rounded-xl"
                />
            </div>
            <h2 className={classNames(classes.titleBig, '')}>{article.title}</h2>
            <div className="mt-5 sm:flex items-center gap-4 text-sm">
                <Link
                    href={`/our-insights/${article.category[0]?.url}`}
                    className={`px-2 py-1 rounded font-medium text-white bg-blue-700 text-base`}
                >
                    {article.category[0]?.title}
                </Link>
                <span>{article.author?.name} {article.author?.last_name}</span>
                <span>{article.reading_time ?? readingTime} dakika</span>
                <span>{article.created_at}</span>
            </div>
        </div>
    );
}
