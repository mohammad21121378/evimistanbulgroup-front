import {useState, useRef, useEffect} from 'react';
import MenuCollapse from '../MenuCollapse';
import styles from '../MenuModal.module.css';
import { useRouter } from 'next/router';

export default function TemplateMobile({title, children, li = true, arrow = true}) {

    const [show, setShow] = useState(false);
    const containerRef = useRef(null);

    const router = useRouter();

    // وقتی مسیر تغییر کرد، setShow(false) اجرا شود
    useEffect(() => {
        const handleRouteChange = () => {
            setShow(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        // پاک‌سازی event listener هنگام unmount شدن کامپوننت
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    const content = (
        <>
            <div className={`cursor-pointer d-flex justify-content-between align-items-center w-100 px-3 ${styles.itemMobile} ${show && styles.show} `} onClick={() => setShow(!show)}>
                <div>
                    {title}
                </div>
                {
                    arrow &&
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L6.29289 7.70711C6.62623 7.37377 6.79289 7.20711 6.79289 7C6.79289 6.79289 6.62623 6.62623 6.29289 6.29289L1 1"
                              stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }
            </div>

            <MenuCollapse show={show}>
                {children}
            </MenuCollapse>
        </>
    );

    return li ? <li ref={containerRef}>{content}</li> : <div ref={containerRef}>{content}</div>;
}
