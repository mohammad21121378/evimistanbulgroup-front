import cn from "classnames";
import styles from './SectionTopWithColor.module.css'
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import { Heading } from "../typography";


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

                <section className={cn("section md:h-[42rem] h-[35rem] grid items-start grid-rows-[auto,1fr]", styles.section)}>

                    <Breadcrumb
                        lightThem
                        items={breadcrumb}
                    />

                    <h1 className="text-white md:text-[7rem] text-[5rem] leading-[105%] mt-auto">
                        {title}
                    </h1>
                </section>
            </div>
        </div>
    );
}
