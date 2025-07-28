'use client'

import Button from "@/components/ui/Button";
import { useConsultationStore } from "@/stores/consultationStore";

export default function MoreInfo() {

    const { onOpen } = useConsultationStore()

    return (
        <section className="section !pt-8">
            <div className="container">
                <h2 className="text-4xl font-bold uppercase">
                    Start Your Journey with Confidence
                </h2>

                <p className="text-gray-500 mt-8 text-2xl">
                    Whether you're buying a home, relocating your family, applying for a residence permit, or investing for citizenship — EvimIstanbul Group is ready to be your partner at every stage.
                </p>

                <p className="text-orange-600 font-bold italic mt-8 mb-12 text-2xl" >
                    We don’t promise shortcuts. We promise results.
                </p>

                <Button gradient={false} outline size="full" className="!font-bold !text-lg !h-auto !py-5" onClick={onOpen}>
                    Book A Free Consultation Now
                </Button>
            </div>
        </section>
    );
}