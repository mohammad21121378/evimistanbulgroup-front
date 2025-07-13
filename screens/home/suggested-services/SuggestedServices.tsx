import ServicesListing from "@/components/services-listing";
import { suggestedServices } from "../constants";

export default function SuggestedServices() {
    return (
        <section className="section md:!pt-24 !pt-36 !pb-0">
            <div className="container">
                <div className="gap-x-6 gap-y-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    {suggestedServices.map((item) => <ServicesListing title={item} />)}
                </div>
            </div>
        </section>
    );
}