import Layout from "@/components/Layout";
import Hero from "./components/Hero";

export default function ClientStories({testimonials,total}) {
    return (
        <Layout>
            <Hero current_testimonials={testimonials} total={total}/>
        </Layout>
    )
}