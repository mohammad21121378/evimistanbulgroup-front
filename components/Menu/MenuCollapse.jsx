import { useRef, useEffect, useState } from 'react';
import styles from './MenuModal.module.css';

const MenuCollapse = ({ show, children }) => {

    return (
        <div
            className={`
                ${styles.mobileContent} 
                ${show ? styles.show : styles.hide}
            `}
        >
            {children}
        </div>
    );
};

export default MenuCollapse;
