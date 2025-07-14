import { useEffect, useRef, useState } from 'react';
import MenuModal from '../MenuModal';
import { Template, TitlePos } from '../types';

export default function TemplateDesktop({ title, children, li = true, arrow = false }: Template) {

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    const [show, setShow] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [titleCenter, setTitleCenter] = useState<number | null>(null);
    const [titlePos, setTitlePos] = useState<TitlePos>(null);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 400)
    }, []);


    const getWrapperBounds = () => {
        if (wrapperRef.current) {
            return wrapperRef.current.getBoundingClientRect();
        }
        return null;
    };

    const calculateTitlePosition = () => {

        if (titleRef.current) {
            setTimeout(() => {
                const rect = titleRef.current!.getBoundingClientRect();

                setTitlePos({
                    left: rect.left,
                    right: rect.right,
                    width: rect.width,
                    bottom: rect.bottom,
                });

            }, 90)

        }
    };

    useEffect(() => {
        calculateTitlePosition();
    }, [show, titleRef]);

    useEffect(() => {
        setTimeout(() => {
            setTitleCenter(titlePos ? titlePos.left + (titlePos.width / 2 - 14) : null);
        }, 300)
    }, [titlePos]);

    useEffect(() => {
        function calculateTitlePositionDelay() {
            setShow(false);
            calculateTitlePosition();
        }
        window.addEventListener('resize', calculateTitlePositionDelay);
        return () => {
            window.removeEventListener('resize', calculateTitlePositionDelay);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent | globalThis.MouseEvent) => {
            if (wrapperRef.current && wrapperRef.current.matches(':hover')) {
                return;
            }
            const bounds = getWrapperBounds();
            if (!bounds || !titlePos) return;

            const insideHorizontally = e.clientX >= bounds.left && e.clientX <= bounds.right;
            const insideVertically = e.clientY >= bounds.top && e.clientY <= bounds.bottom;

            if (!insideHorizontally || !insideVertically) {
                const verticalDistance = e.clientY - titlePos.bottom;
                if (verticalDistance > 50 || verticalDistance < 0) {
                    setShow(false);
                }
            }
        };

        if (show) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [show]);


    const handleMouseLeave = () => { };

    const handleMouseEnter = () => {
        if (!loaded) {
            setTimeout(() => {
                setShow(true);
            }, 500);

            return;
        }
        setShow(true);
    };

    const content = (
        <>
            <span ref={titleRef} className={'cursor-pointer flex items-center gap-1 label-small'}>
                {title}
                {
                    arrow &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-down mt-0.5 w-3.5" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                }
            </span>

            <MenuModal show={show} titleCenter={titleCenter} titlePos={titlePos} onClick={() => setShow(false)}>
                {children}
            </MenuModal>
        </>
    );

    const wrapperProps = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: 'relative',
        ref: wrapperRef
    };

    return li ? <div {...wrapperProps}>{content}</div> : <div {...wrapperProps}>{content}</div>;
}
