import { Heading } from "../typography";
import Markdown from "markdown-to-jsx";
import AnimatedText from "../ui/AnimateText";

type Props = {
    title?: string;
    subTitle?: string;
    description?: string;
}

export default function ContentTopPage({ title, subTitle, description }: Props) {
    return (
        <section className="section !pt-8 !pb-6 text-center">
            
            <h1 className="heading-1 font-bold">
                { title ? <AnimatedText title={title} /> : '' }
            </h1>

            <Heading type="heading-5" className="mt-12 text-gray-500 whitespace-pre-line">
                {subTitle}
            </Heading>

            {description &&
                <p className="text-lg text-gray-500 mt-6 whitespace-pre-line">
                    <Markdown options={{ forceInline: true }}>
                        {description}
                    </Markdown>
                </p>
            }
        </section>
    );
}