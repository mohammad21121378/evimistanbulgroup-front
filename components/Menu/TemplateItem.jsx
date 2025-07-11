import { useEffect, useState } from 'react';
import TemplateMobile from './Templates/TemplateMobile';
import TemplateDesktop from './Templates/TemplateDesktop';

export default function TemplateItem(props) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, [])

    useEffect(() => {
        // تابعی برای بررسی عرض صفحه
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 992);
        };

        // وقتی کامپوننت لود شد، یکبار اجرا میشه
        handleResize();

        // گوش دادن به تغییر اندازه صفحه
        window.addEventListener('resize', handleResize);

        // پاکسازی هنگام آن‌مانت
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!loaded) return;
    return isDesktop ? <TemplateDesktop {...props} /> : <TemplateMobile {...props} />;
}
