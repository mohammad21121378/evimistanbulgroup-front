import { MenuData } from '@/constants/menu'
import TemplateItemWithItems from '../TemplateItemWithItems'

export default function AboutUs() {

    const { aboutUs } = MenuData;

    return (
        <TemplateItemWithItems
            title="About Us"
            href="/our-story"
            items={aboutUs}
            width={14.375}
            singleColumn
            sectionClassName='!pt-0 !px-2 !pb-1'
        />

    );
}