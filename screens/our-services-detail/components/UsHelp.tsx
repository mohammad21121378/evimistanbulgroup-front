'use client'

import { useConsultationStore } from "@/stores/consultationStore";

type Props = {
    data: {
        description: string;
        buttonHref: string;
        buttonLabel?: string;
    }
}

export default function UsHelp({ data }: Props) {

    const {onOpen} = useConsultationStore()

    return (
        <section className="section !pt-0">
            <div className="bg-[#002DD1] py-16">
                <div className="container space-y-14 text-center">

                    <h2 className="text-5xl font-bold text-orange-600">
                        Let Us Help.
                    </h2>

                    <p className="font-medium text-xl text-white whitespace-pre-line">
                        {data.description}
                    </p>

                        <button className="button mt-14 !text-base" onClick={onOpen}>
                            {
                                data.buttonLabel ? data.buttonLabel :
                                    <>
                                        Start Your Citizenship Journey Today – Request a Free Consultation
                                    </>
                            }
                        </button>
                </div>
            </div>
        </section>
    );
}