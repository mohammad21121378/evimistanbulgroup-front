import { useEffect, useState } from 'react';
import TemplateDesktop from './templates/TemplateDesktop';
import TemplateMobile from './templates/TemplateMobile';
import { Template } from './types';

export default function TemplateItem(props: Template) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // مرحله اول: سعی کن loaded رو true کنی
        setLoaded(true);

        // مرحله دوم: اگر به هر دلیلی تا 2 ثانیه loaded تغییر نکرد، به‌زور تغییر بده
        const timeoutId = setTimeout(() => {
            setLoaded(prev => {
                if (!prev) {
                    console.warn('💡 forced setLoaded(true) after delay');
                    return true;
                }
                return prev;
            });
        }, 1600); // 2 ثانیه صبر می‌کنیم

        return () => clearTimeout(timeoutId);
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

    if (!loaded) return null;

    return isDesktop ? <TemplateDesktop {...props} /> : <TemplateMobile {...props} />;
}
