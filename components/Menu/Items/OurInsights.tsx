import { MenuData } from '@/constants/menu'

import TemplateItemWithItems from '../TemplateItemWithItems'

export default function OurInsights() {

    const { ourInsights } = MenuData;

    return (
        <TemplateItemWithItems contentClassName="!grid-cols-1" sectionClassName='grid grid-cols-2' title="Our Insights" items={ourInsights}  />
    );
}