import { useEffect, useState } from 'react';
import TemplateDesktop from './templates/TemplateDesktop';
import TemplateMobile from './templates/TemplateMobile';
import { Template } from './types';

export default function TemplateItem(props: Template) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('[TemplateItem] ✅ useEffect mounted');

        setLoaded(true);
        console.log('[TemplateItem] 🚀 setLoaded(true) called');

        const timeoutId = setTimeout(() => {
            setLoaded(prev => {
                if (!prev) {
                    console.warn('[TemplateItem] ⚠️ Fallback: loaded still false after 2s. Forcing setLoaded(true)');
                    return true;
                } else {
                    console.log('[TemplateItem] ✅ Fallback not needed, already loaded');
                    return prev;
                }
            });
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const isDesktopNow = window.innerWidth > 992;
            console.log('[TemplateItem] 📏 handleResize:', isDesktopNow ? 'Desktop' : 'Mobile');
            setIsDesktop(isDesktopNow);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log('[TemplateItem] 🔍 loaded =', loaded, '| isDesktop =', isDesktop);

    if (!loaded) {
        console.log('[TemplateItem] 💤 Not loaded yet, returning null...');
        return null;
    }

    console.log('[TemplateItem] 🎉 Rendering:', isDesktop ? 'TemplateDesktop' : 'TemplateMobile');
    return isDesktop ? <TemplateDesktop {...props} /> : <TemplateMobile {...props} />;
}
