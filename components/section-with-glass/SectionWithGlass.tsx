import classNames from 'classnames';
import styles from './SectionWithGlass.module.css'
import { ReactNode } from 'react';

type Props = {
    className?: string;
    children: ReactNode;
}

export default function SectionWithGlass({ className, children }: Props) {
    return (
        <div className={classNames(styles['glass-bg'], className)}>
            {children}
        </div>
    );
}