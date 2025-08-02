'use client'

import UsefulLinks from "@/components/useful-links";
import { Article } from "../../../../types/Article";
import { useConsultationStore } from "@/stores/consultationStore";
import ImageModal from "@/components/image-modal/ImageModal";
import classes from "./styles.module.css";

type Props = {
    article: Article;
};

export default function RightSidebar({ article }: Props) {


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

                {article.banner_1_media?.url && (
                    <div className={`${classes.rightSideBarImage} w-full rounded-md`}>
                        {article.banner_1 ? (
                            <a href={article.banner_1} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={article.banner_1_media.url}
                                    alt={article.banner_1_media.alt}
                                    className="w-full rounded-md"
                                />
                            </a>
                        ) : (
                            <img
                                src={article.banner_1_media.url}
                                alt={article.banner_1_media.alt}
                                className="w-full rounded-md"
                            />
                        )}
                    </div>
                )}

                {article.banner_2_media?.url && (
                    <div className={`${classes.rightSideBarImage} w-full rounded-md`}>
                        {article.banner_2 ? (
                            <a href={article.banner_2} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={article.banner_2_media.url}
                                    alt={article.banner_2_media.alt}
                                    className="w-full rounded-md"
                                />
                            </a>
                        ) : (
                            <img
                                src={article.banner_2_media.url}
                                alt={article.banner_2_media.alt}
                                className="w-full rounded-md"
                            />
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}