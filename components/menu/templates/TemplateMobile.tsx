import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import styles from '../MenuModal.module.css';
import MenuCollapse from '../MenuCollapse';
import { Template } from '../types';

export default function TemplateMobile({ title, children, li = false, arrow = true }: Template) {

    const [show, setShow] = useState(false);
    const containerRef = useRef(null);

    const pathname = usePathname();

    useEffect(() => {
        setShow(false);
    }, [pathname]);

    const content = (
        <>
            <div className={`cursor-pointer flex justify-center items-center w-full gap-2.5 ${styles.itemMobile} ${show && styles.show} `} onClick={() => setShow(!show)}>
                <div>
                    {title}
                </div>
                {
                    arrow &&
                    <svg width="7" className='mt-0.5' viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L6.29289 7.70711C6.62623 7.37377 6.79289 7.20711 6.79289 7C6.79289 6.79289 6.62623 6.62623 6.29289 6.29289L1 1"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                }
            </div>

            <MenuCollapse show={show}>
                {children}
            </MenuCollapse>
        </>
    );

    return li ? <li ref={containerRef}>{content}</li> : <div className='w-full' ref={containerRef}>{content}</div>;
}
