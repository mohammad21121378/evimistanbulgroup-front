import ServicesListing from "@/components/services-listing";
import { suggestedServices } from "../constants";

export default function SuggestedServices() {
    return (
        <section className="section !pt-24 !pb-0">
            <div className="container">
                <div className="space-x-6 grid grid-cols-4">
                    {suggestedServices.map((item) => <ServicesListing title={item} />)}
                </div>
            </div>
        </section>
    );
}