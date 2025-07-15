import styles from "./hero.module.css"
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { Heading } from "@/components/typography";
import classNames from "classnames";

const ROOT_TITLE = 'Our Guides & Insights';

interface HeroProps {
    category?: string;
}

export default function Hero({ category }: HeroProps) {

    let breadCrumb: { label: string, href?: string }[];

    if (category) {
        breadCrumb = [
            {
                label: ROOT_TITLE,
                href: "/our-insights"
            },
            {
                label: category,
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
                    {category ? category : ROOT_TITLE}
                </Heading>

                <div className={classNames(styles.description, 'space-y-3')}>
                    <p className="paragraph-2x-large font-bold">
                        Your All-in-One Knowledge Hub for Real Estate, Citizenship, Healthcare, and Lifestyle in Turkey
                    </p>

                    <p className="paragraph-large">
                        Looking to buy property in Turkey, gain Turkish citizenship by investment, start a company, pursue your studies, receive medical treatment, enjoy leisure travel, or relocate with your family? You’re in the right place — welcome to EvimIstanbul®.
                    </p>

                    <p className="paragraph-large">
                        EvimIstanbul Insights is your trusted resource for expert-written guides covering every step of your journey — from real estate acquisition and legal residency to business setup, student life, medical tourism, and holiday experiences in Turkey.
                    </p>

                    <p className="paragraph-large">
                        Our multilingual consultants, legal advisors, and market experts offer region-specific insights and practical advice across Istanbul, Antalya, Izmir, Bodrum, and beyond. Whether you’re an investor, expat, student, or visitor, our content empowers you to make confident decisions and build a successful future in Turkey.
                    </p>
                </div>
            </div>
        </section>
    )
}
