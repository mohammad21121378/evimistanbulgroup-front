import { MenuData } from '@/constants/menu'
import TemplateItemWithItems from '../TemplateItemWithItems';


export default function Properties() {

    const { properties } = MenuData;

    return (
        <TemplateItemWithItems title="Properties" items={properties} />
    );
}