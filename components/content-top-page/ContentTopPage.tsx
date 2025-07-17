import { Heading } from "../typography";

type Props = {
    title?: string;
    subTitle?: string;
    description?: string;
}

export default function ContentTopPage({ title, subTitle, description }: Props) {
    return (
        <section className="section !pt-8 !pb-6 text-center">
            <Heading type="heading-1">
                {title}
            </Heading>

            <Heading type="heading-5" className="mt-12 text-gray-500">
                {subTitle}
            </Heading>

            <p className="text-lg text-gray-500 mt-6 whitespace-pre-line">
                {description}
            </p>
        </section>
    );
}