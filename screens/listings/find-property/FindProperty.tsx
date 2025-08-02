'use client'

import { useConsultationStore } from "@/stores/consultationStore";
import SvgForBg from "./SvgForBg";
import classNames from "classnames";
import styles from './FindProperty.module.css'

export default function FindProperty() {
    const { onOpen } = useConsultationStore();
    return (
        <div className={classNames("pt-20 pb-24 mt-16 space-y-6 text-white text-center z-10 relative", styles['glass-bg'])}>
            <div className="heading-6 text-orange-500">
                Let Us Help.
            </div>

            <h2 className="heading-5">
                Can’t Find the Right Property?
            </h2>

            <p className="paragraph-medium container mx-auto px-20 2xl:px-48 relative z-10">
                Not all of our properties are listed online — and some of the best offers go fast. If you’re looking for something specific, contact us directly and our team will handpick options tailored to your needs, budget, and goals.
            </p>

            <button className="button" onClick={onOpen}>
                Book A Free Consultation
            </button>

            <SvgForBg className="md:block hidden absolute left-6 top-1/2 -translate-y-[56%] " />
            <SvgForBg className="md:block hidden absolute right-6 top-1/2 -translate-y-[56%] -scale-x-100 " />

        </div>
    );
}