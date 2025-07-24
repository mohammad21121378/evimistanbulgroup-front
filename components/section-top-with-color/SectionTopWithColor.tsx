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
        <div className={cn("", bg)}>
            <div className={cn("container")}>
                <section className={cn("section h-[42rem] grid items-start", styles.section)}>
                    <Breadcrumb
                        items={breadcrumb}
                    />

                    <Heading type="heading-1" className="text-white">
                        {title}
                    </Heading>
                </section>
            </div>
        </div>
    );
}
