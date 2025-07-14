import Section from './Section'
import MenuItem from './MenuItem'
import TemplateItem from './TemplateItem'
import SeeAll from './SeeAll'
import classNames from 'classnames'
import classes from './MenuModal.module.css'

type MenuChildItem = {
  icon?: JSX.Element;
  title: string | JSX.Element;
  href: string | boolean;
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
  singleColumn?: boolean;
  seeAllRight?: boolean
};

export default function TemplateItemWithItems({
  items,
  title,
  width = 33.75,
  contentClassName,
  sectionClassName,
  arrow = true,
  menuItemClassName,
  singleColumn = false,
  seeAllRight=false
}: Props) {

  const allSections = Object.values(items);
  const half = Math.ceil(allSections.length / 2);
  const left = allSections.slice(0, half);
  const right = allSections.slice(half);
  const seeAllRightClasses = seeAllRight ? 'text-right justify-end' : ''

  return (
    <TemplateItem title={title} arrow={arrow}>
      <div
        className={classNames(
          contentClassName,
          singleColumn ? 'md:flex md:flex-col gap-4' : 'md:flex gap-4',
          classes.contentContainer
        )}
        style={{ width: `${width}rem` }}
      >
        {singleColumn ? (
          allSections.map((item, idx) => (
            <Section key={idx} title={item.title} className={sectionClassName}>
              {item.items.map((child, idx2) => (
                <div key={idx + '-' + idx2}>
                  <MenuItem className={menuItemClassName} {...child} />
                </div>
              ))}
              {item.seeAllHref && <SeeAll className={seeAllRightClasses} href={item.seeAllHref} />}
            </Section>
          ))
        ) : (
          <>
            <div className="md:flex md:flex-col gap-2 md:w-1/2 w-full">
              {left.map((item, idx) => (
                <Section key={idx} title={item.title} className={sectionClassName}>
                  {item.items.map((child, idx2) => (
                    <div key={idx + '-' + idx2}>
                      <MenuItem className={menuItemClassName} {...child} />
                    </div>
                  ))}
                  {item.seeAllHref && <SeeAll className={seeAllRightClasses} href={item.seeAllHref} />}
                </Section>
              ))}
            </div>

            <div className="md:flex md:flex-col gap-2 md:w-1/2 w-full">
              {right.map((item, idx) => (
                <Section key={half + idx} title={item.title} className={sectionClassName}>
                  {item.items.map((child, idx2) => (
                    <div key={half + idx + '-' + idx2}>
                      <MenuItem className={menuItemClassName} {...child} />
                    </div>
                  ))}
                  {item.seeAllHref && <SeeAll className={seeAllRightClasses} href={item.seeAllHref} />}
                </Section>
              ))}
            </div>

          </>
        )}
      </div>
    </TemplateItem>
  );
}
