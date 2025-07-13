import { ReactNode } from 'react';
import styles from './MenuModal.module.css';

type Props = {
    show:boolean; 
    children: ReactNode;
}

const MenuCollapse = ({ show, children }: Props) => {

    return (
        <div
            className={`
                ${styles.mobileContent} 
                ${show ? styles.show : styles.hide}
                rounded-xl
            `}
        >
            {children}
        </div>
    );
};

export default MenuCollapse;
