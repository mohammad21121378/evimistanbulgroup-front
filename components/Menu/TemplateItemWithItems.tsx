import Section from './Section'
import MenuItem from './MenuItem'

import TemplateItem from './TemplateItem'
import SeeAll from './SeeAll'
import classNames from 'classnames';

type MenuChildItem = {
    icon?: JSX.Element;
    title: string;
    href: string;
};

type MenuSection = {
    title: string | JSX.Element;
    items: MenuChildItem[];
    seeAllHref?: string;
};

type MenuData = {
    [key: string]: MenuSection;
};

type Props = {
    items: MenuData;
    title: string | JSX.Element;
    width?: number;
    sectionClassName?: string;
    contentClassName?: string;
    arrow?: boolean;
    menuItemClassName?: string;
};

export default function TemplateItemWithItems({ items, title, width = 540, contentClassName, sectionClassName, arrow=true, menuItemClassName }: Props) {

    return (
        <TemplateItem title={title} arrow={arrow}>
            <div
                className={classNames('grid grid-cols-2', contentClassName)}
                style={{ width: width }}
            >
                {Object.values(items).map((item, idx) => (

                    <Section title={item.title} childrenClassName={sectionClassName}>
                        {item.items.map((child, idx2) => (
                            <div key={idx2}>
                                <MenuItem className={menuItemClassName} {...child} />
                            </div>
                        ))}
                        {item.seeAllHref && <SeeAll href={item.seeAllHref} />}
                    </Section>
                ))}
            </div>
        </TemplateItem>

    );
}