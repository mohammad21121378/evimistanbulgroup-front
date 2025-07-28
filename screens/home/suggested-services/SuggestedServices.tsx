'use client'

import ServicesListing from "@/components/services-listing";
import { suggestedServices } from "../constants";
import { motion } from 'framer-motion'
import { viewportMargin } from "@/constants/animation";

const animationVariants = (index: number) => {
    return {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delay: 2.7 + (0.1 * (index)),
                duration: .8,
            }
        },
    }
};

export default function SuggestedServices() {
    return (
        <section className="section md:!pt-24 !pt-36 !pb-0">
            <div className="container">
                <div className="gap-x-6 gap-y-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    {suggestedServices.map((item, index) =>
                        <motion.div
                            variants={animationVariants(index)}
                            initial="hidden"
                            animate="visible"
                            className="w-full grid grid-cols-1"
                            viewport={viewportMargin}

                        >
                            <ServicesListing title={item.title} link={item.link} />
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}