
import Breadcrumb from "@/components/breadcrumb";
import AnimatedTitle from "@/components/section-top-with-color/AnimatedTitle";

export default function Hero() {
    return (
        <section className="section !pt-36 !pb-6">
            <div className="container">
                <Breadcrumb items={[{label: 'Terms & Conditions'}]} />
                <AnimatedTitle className="!text-black !mt-6" title={`Terms & \nConditions`} />
            </div>
        </section>
    );
}
