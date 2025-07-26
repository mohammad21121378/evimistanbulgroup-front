import cn from "classnames";
import styles from './SectionTopWithColor.module.css'
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import AnimatedTitle from "./AnimatedTitle";
import { ReactNode } from "react";


type Props = {
    bg: string;
    breadcrumb: { label: string; href?: string }[];
    title: string;
    children?: ReactNode;
    noneAnimate?: boolean;
    className?: string;
    titleClassName?: string;
    titleSm?: boolean
}

export default function SectionTopWithColor({ bg, breadcrumb, title, children, noneAnimate, className, titleClassName, titleSm }: Props) {
    return (
        <div className={cn("relative", bg)}>
            <div className={styles.overlay} />
            <div className={cn("container")}>

                <section className={cn("section md:h-[40rem] sm:h-[35rem] h-[30rem] grid items-start grid-rows-[auto,1fr]", styles.section, className)}>

                    <Breadcrumb
                        lightThem
                        items={breadcrumb}
                    />

                    <AnimatedTitle titleSm={titleSm} className={titleClassName} noneAnimate={noneAnimate} title={title}></AnimatedTitle>

                    {children}
                </section>
            </div>

        </div>
    );
}
