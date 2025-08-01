import { ReactNode } from 'react';
import styles from './MenuModal.module.css'
import Link from '../ui/Link';
import classNames from 'classnames';

type Props = {
    icon?: ReactNode;
    title: string | JSX.Element;
    href?: string | boolean;
    description?: string;
    external?: boolean;
    active?: boolean;
    className?: string;
    py?: string;
    m?: string;
};

export default function MenuItem({ icon, external = false, title, description, active, href, className, }: Props) {

    
    const content = (
        <div className={`flex items-start ${icon && 'gap-1.5 w-full'} -ml-px rounded-md px-0 ${className} ${styles.menuItem} py-1`} style={{ background: active ? '#fff' : '' }}>
            <div style={{ color: 'inherit !important' }}>
                {icon}
            </div>
            <div>
                <div className={'text-base font-semibold '}>{title}</div>
                {description && <div className={`${styles.textGray1} pt-1 text-xs`}>{description}</div>}
            </div>
        </div>
    );

    if (external && typeof href === 'string') {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="svgNotHover transition-all duration-500 text-[#111B29] hover:!fill-orange-500 hover:text-orange-500">
                {content}
            </a>
        );
    }

    return (
        typeof href === 'string' ?
            <Link href={href} noLink={!href} className="svgNotHover duration-500 text-[#111B29] hover:!fill-orange-500 hover:text-orange-500">
                {content}
            </Link>
            :
            <div className={classNames(styles.itemContent, '')}>
                {content}
            </div>
    );
}
