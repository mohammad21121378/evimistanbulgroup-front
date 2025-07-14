import { MenuData } from '@/constants/menu'
import TemplateItemWithItems from '../TemplateItemWithItems';

export default function OurServices() {

    const { ourServices } = MenuData;

    return (
        <TemplateItemWithItems title="Our Services" seeAllRight items={ourServices} />
    );
}