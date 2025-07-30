import { MenuData } from '@/constants/menu'
import TemplateItemWithItems from '../TemplateItemWithItems'

type Props ={
    title: string | JSX.Element 
}

export default function ContactUs({title}: Props) {

    const { contactUs } = MenuData;

    return (
        <TemplateItemWithItems svgColor={'#F06210'} href="/contact-us" sectionClassName='!p-0' menuItemClassName={'justify-center text-center !px-0 mt-1.5'} singleColumn arrow={false} title={title} items={contactUs} width={16.5} />
    );
}