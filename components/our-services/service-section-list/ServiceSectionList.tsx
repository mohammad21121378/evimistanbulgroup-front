import Link from "@/components/ui/Link";

interface ServiceItem {
    title: string;
    description: string;
    href?: string
}

interface ServiceSection {
    heading: string;
    subheading: string;
    items: ServiceItem[];
}


interface Props {
    sections: ServiceSection[];
}

export default function ServiceSectionList({ sections }: Props) {
    return (
        <>
            {sections.map((section, idx) => (
                <section key={idx} className="pb-16">
                    <h2 className="text-orange-500 font-bold text-3xl mb-2.5">
                        {section.heading}
                    </h2>

                    <p className="text-xl font-normal mb-8">
                        {section.subheading}
                    </p>

                    <ul className="space-y-4 list-disc pl-7">
                        {section.items.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href ? '/our-services' + item.href : ''} noLink={!item.href} className="font-bold text-black hover:text-orange-500 text-xl flex items-center gap-2 w-fit">
                                    {item.title}
                                    <svg width="1.65rem" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9998 20.3337L20.3332 15.0003M20.3332 15.0003L14.9998 9.66699M20.3332 15.0003H9.6665M28.3332 15.0003C28.3332 22.3641 22.3636 28.3337 14.9998 28.3337C7.63604 28.3337 1.6665 22.3641 1.6665 15.0003C1.6665 7.63653 7.63604 1.66699 14.9998 1.66699C22.3636 1.66699 28.3332 7.63653 28.3332 15.0003Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                                <p className="text-xl font-normal mt-1">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}
