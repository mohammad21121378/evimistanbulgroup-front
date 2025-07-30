import { useRef, useEffect, useState, ReactNode } from 'react';
import styles from './MenuModal.module.css';
import { Adjust, TitlePos } from './types';

type Props = {
    show: boolean;
    children: ReactNode;
    titleCenter?: number | null;
    titlePos: TitlePos;
    onClick?: () => void;
    svgColor?: string
  };

const MenuModal = ({ show: showProps, children, titleCenter, titlePos, onClick, svgColor }: Props) => {

    const modalRef = useRef<HTMLDivElement | null>(null);
    const [adjust, setAdjust] = useState<Adjust>(false);
    const [svgLeft, setSvgLeft] = useState<null | string>(null);
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(showProps)
        }, 130)
    }, [showProps]);

    const getModalRect = () => {
        if (modalRef.current) {
            return modalRef.current.getBoundingClientRect();
        }
    }

    const calculate = () => {
        if (modalRef.current && showProps && titlePos) {

            const modalRect = getModalRect();
            const modalRectWidth = modalRect?.width ?? 0
            const overflowsRight = titlePos.left+modalRectWidth > (window.innerWidth + 12);


            const overflowsLeft = titlePos.left - (modalRectWidth / 2) < 12;

            if (overflowsLeft) {
                setAdjust('left');
            } else if (overflowsRight) {
                setAdjust('right');
            } else {
                setAdjust(false)
            }
        }
    }

    useEffect(() => {
        calculate();
    }, [titlePos]);


    useEffect(() => {
        window.addEventListener('resize', calculate);
        return () => {
            window.removeEventListener('resize', calculate);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (titleCenter && modalRef.current) {
                const modalRect = modalRef.current.getBoundingClientRect();
                const svgPos = titleCenter - (modalRect.left);
                setSvgLeft(`${svgPos}px`);
            }
        }, 200)
    }, [titleCenter, showProps, titlePos, modalRef.current])

    return (
        <div
            ref={modalRef}
            className={`
                ${styles.modal} 
                ${show ? styles.show : styles.hide} 
                ${adjust === 'left' ? styles.adjustLeft : ''}
                ${adjust === 'right' ? styles.adjustRight : ''}
            `}
            style={{
                left: adjust === 'left' ? 300 : ((adjust === 'right') ? (-15) : ''),
                transform: adjust ? `none !imporatnt` : ''
            }}
            onClick={onClick}
        >
            {
                svgLeft &&
                <svg
                    width="27"
                    height="14"
                    viewBox="0 0 27 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.svgIcon}`}
                    style={{ left: svgLeft }}
                >
                    <path
                        className={'shadow-lg'}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 13.7254H26.2354C26.058 13.2894 25.8132 12.8809 25.5011 12.5207L15.7371 1.25218C14.2904 -0.417393 11.945 -0.417395 10.4983 1.25218L0.734338 12.5207C0.422218 12.8809 0.177439 13.2894 0 13.7254Z"
                        fill={svgColor?svgColor:"#F2F4F7"}
                    />
                </svg>
            }
            <div className={`overflow-hidden ${styles.content}`}>{children}</div>
        </div>
    );
};

export default MenuModal;
