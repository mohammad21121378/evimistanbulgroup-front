import styles from "./hero.module.css"
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { Heading } from "@/components/typography";
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

                <Heading type="heading-3" className="text-center mb-10 mt-3 capitalize" >
                    {category ? page.title : ROOT_TITLE}
                </Heading>

                <div dangerouslySetInnerHTML={{__html:page.content}} className={classNames(styles.description, 'space-y-3 paragraph-2x-large font-bold')}>

                </div>
            </div>
        </section>
    )
}
