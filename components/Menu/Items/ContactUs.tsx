import { MenuData } from '@/constants/menu'

import TemplateItemWithItems from '../TemplateItemWithItems'

type Props ={
    title: string | JSX.Element 
}

export default function ContactUs({title}: Props) {

    const { contactUs } = MenuData;

    return (
        <TemplateItemWithItems menuItemClassName={'justify-center text-center !px-0'} arrow={false} contentClassName="!grid-cols-1" title={title} items={contactUs} width={235} />
    );
}