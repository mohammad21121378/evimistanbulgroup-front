import { useEffect, useState } from 'react';
import TemplateDesktop from './templates/TemplateDesktop';
import TemplateMobile from './templates/TemplateMobile';
import { Template } from './types';

export default function TemplateItem(props: Template) {

    const [isDesktop, setIsDesktop] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('[TemplateItem] Mounting effect triggered');
        setLoaded(true);

        requestAnimationFrame(() => {
            window.dispatchEvent(new Event('mousemove'));
        });

        const fallback = setTimeout(() => {
            setLoaded(prev => {
                if (!prev) {
                    console.warn('⚠️ Fallback forced setLoaded(true)');
                    return true;
                }
                return prev;
            });
        }, 1800);

        return () => clearTimeout(fallback);
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!loaded) return;
    return isDesktop ? <TemplateDesktop {...props} /> : <TemplateMobile {...props} />;
}
