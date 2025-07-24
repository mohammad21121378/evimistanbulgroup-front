import cn from "classnames";
import styles from './SectionTopWithColor.module.css'
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import AnimatedTitle from "./AnimatedTitle";


type Props = {
    bg: string;
    breadcrumb: { label: string; href?: string }[];
    title: string
}

export default function SectionTopWithColor({ bg, breadcrumb, title }: Props) {
    return (
        <div className={cn("relative", bg)}>
            <div className={styles.overlay} />
            <div className={cn("container")}>

                <section className={cn("section md:h-[40rem] h-[35rem] grid items-start grid-rows-[auto,1fr]", styles.section)}>

                    <Breadcrumb
                        lightThem
                        items={breadcrumb}
                    />

                    <AnimatedTitle title={title}></AnimatedTitle>
                </section>
            </div>
        </div>
    );
}
