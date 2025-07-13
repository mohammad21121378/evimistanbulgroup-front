import { ReactNode } from 'react';
import styles from './MenuModal.module.css'
import Link from 'next/link'

type Props = {
    icon?: ReactNode;
    title: string | JSX.Element;
    href?: string | false;
    description?: string;
    external?: boolean;
    active?: boolean;
    className?: string;
    py?: string;
    m?: string;
};

export default function MenuItem({ icon, external = false, title, description, active, href = "/", className, }: Props) {
    const content = (
        <div className={`flex items-start gap-1.5 w-full rounded-md px-1.5 ${className} ${styles.menuItem} pt-2.5`} style={{ background: active ? '#fff' : '' }}>
            <div style={{ color: 'inherit !important' }}>
                {icon}
            </div>
            <div>
                <div className={'text-sm font-semibold '}>{title}</div>
                {description && <div className={`${styles.textGray1} pt-1 text-xs`}>{description}</div>}
            </div>
        </div>
    );

    if (external && href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="svgNotHover transition-all duration-500 text-[#111B29] hover:!fill-orange-500 hover:text-orange-500">
                {content}
            </a>
        );
    }

    return (
        href ?
            <Link href={href} className="svgNotHover duration-500 text-[#111B29] hover:!fill-orange-500 hover:text-orange-500">
                {content}
            </Link>
            :
            <div className={styles.itemContent}>
                {content}
            </div>
    );
}
