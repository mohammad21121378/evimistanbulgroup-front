import { Heading } from "@/components/typography";
import { whyUsFeatures } from "../constants";
import FeatureItem from "@/components/feature-item";

export default function WhyUs() {
    return (
        <section className="section !pt-10">
            <div className="container">
                
                <Heading type="heading-2">
                    Why Choose EvimIstanbul Group?
                </Heading>

                <div className="mt-20">
                    {
                        whyUsFeatures.map(item => <FeatureItem title={item.title} description={item.description} />)
                    }
                </div>

            </div>
        </section>
    );
}