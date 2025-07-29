import { MenuData } from '@/constants/menu'
import TemplateItemWithItems from '../TemplateItemWithItems';

export default function Properties() {

    const { properties } = MenuData;

    return (
        <TemplateItemWithItems href="/properties-for-sale-in-turkey" title="Properties" items={properties} />
    );
}