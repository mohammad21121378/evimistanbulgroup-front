import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import {TestimonialData} from "./types";

interface ClientStoriesProps {
    testimonials: TestimonialData[];
    total: number;
}
export default function ClientStories({testimonials,total}:ClientStoriesProps) {
    return (
        <Layout>
            <Hero current_testimonials={testimonials} total={total}/>
        </Layout>
    )
}