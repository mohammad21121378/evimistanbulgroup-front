'use client'

import UsefulLinks from "@/components/useful-links";
import { Article } from "../../../../types/Article";
import { useConsultationStore } from "@/stores/consultationStore";
import ImageModal from "@/components/image-modal/ImageModal";

type Props = {
    article: Article;
};

export default function RightSidebar({ article }: Props) {

    const additionalImages = article.additional_images?.length
        ? article.additional_images
        : [
              { src: '/images/video.webp', alt: 'video' },
              { src: '/images/video.webp', alt: 'video' },
          ];

    const { onOpen } = useConsultationStore();
    return (
        <div className="md:col-span-3 md:pt-14 pt-2 overflow-visible lg:pl-9 rounded-md ">
            <div className="sticky top-28 space-y-5 md:max-h-[85dvh] rounded-md overflow-y-auto p-1 pr-1.5 scrollbar-sm">

                <div className="bg-slate-100 outline w-full text-center outline-1 outline-orange-500 p-3.5 rounded-lg grid justify-center text-base font-medium">

                    Need Personalized Help?

                    <button onClick={onOpen} className="button mt-2.5 button-small">
                        Book A Free Consultation
                    </button>

                </div>

                <UsefulLinks
                    className=""
                    text={article.resource}
                    inline
                />

                {
                    additionalImages.map((img) =>

                        <ImageModal
                            src={img.src}
                            className="w-full rounded-md"
                            alt={img.alt}
                        />
                    )
                }
            </div>
        </div>
    );
}