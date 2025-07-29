import styles from "./hero.module.css"
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { Heading } from "@/components/typography";
import AnimatedText from "@/components/ui/AnimateText";
import classNames from "classnames";

const ROOT_TITLE = 'Our Guides & Insights';

interface Page {
    content: string;
    title: string;
}

interface HeroProps {
    page: Page;
    category?: boolean;
}

export default function Hero({ page,category }: HeroProps) {

    let breadCrumb: { label: string, href?: string }[];

    if (category) {
        breadCrumb = [
            {
                label: ROOT_TITLE,
                href: "/our-insights"
            },
            {
                label: page.title,
            }
        ];
    } else {
        breadCrumb = [
            {
                label: ROOT_TITLE,
            },
        ];
    }

    return (

        <section className={classNames("section", styles.section)}>
            <div className="container">

                <Breadcrumb items={breadCrumb} />

                <h1 className="text-center heading-3 mb-6 mt-10 capitalize" >
                {category ? <AnimatedText title={page.title} /> : <AnimatedText title={ROOT_TITLE} />}

                    {category ? page.title : ROOT_TITLE}
                </h1>

                <div dangerouslySetInnerHTML={{__html:page.content}} className={classNames('text-gray-500 text-center text-xl leading-relaxed md:px-16', styles.description)}>

                </div>
            </div>
        </section>
    )
}
