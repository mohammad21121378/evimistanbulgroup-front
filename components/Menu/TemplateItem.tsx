import { useEffect, useState } from 'react';
import TemplateMobile from './Templates/TemplateMobile';
import TemplateDesktop from './Templates/TemplateDesktop';
import { Template } from './types';

export default function TemplateItem(props: Template) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, [])

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
