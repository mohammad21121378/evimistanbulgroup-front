import { MenuData } from '@/constants/menu'
import TemplateItemWithItems from '../TemplateItemWithItems';


export default function OurInsights() {

    const { ourInsights } = MenuData;

    return (
        <TemplateItemWithItems title="Our Insights" seeAllRight items={ourInsights} width={37.5}  />
    );
}