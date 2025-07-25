import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import {Testimonial} from "./types";

interface ClientStoriesProps {
    testimonials: Testimonial[];
    total: number;
}
export default function ClientStories({testimonials,total}:ClientStoriesProps) {
    return (
        <Layout>
            <Hero current_testimonials={testimonials} total={total}/>
        </Layout>
    )
}