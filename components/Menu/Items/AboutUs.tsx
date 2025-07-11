import { MenuData } from '@/constants/menu'

import TemplateItemWithItems from '../TemplateItemWithItems'

export default function AboutUs() {

    const { aboutUs } = MenuData;

    return (
        <TemplateItemWithItems contentClassName="!grid-cols-1" title="About Us" items={aboutUs} width={230} />
    );
}