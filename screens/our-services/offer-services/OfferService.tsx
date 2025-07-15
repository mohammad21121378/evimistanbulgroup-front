import FeatureCard from "@/components/feature-card";
import { offerServices } from "../constants";


export default function OfferServices() {
    const buttonLabel = 'Learn More'
    return (
        <section className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12">
                    {
                        offerServices.map(item => <FeatureCard {...item} buttonLabel={buttonLabel} />)
                    }
                </div>
            </div>
        </section>
    );
}