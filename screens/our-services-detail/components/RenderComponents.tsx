import { ComponentsType } from "../types";

type Props = {
    components: ComponentsType;
    mainSections: any
}

export default function RenderComponents({mainSections, components}: Props) {
    return (
        <>
            {mainSections.map((section: any, index: number) => {
                const Component = components[section.type as keyof typeof components];
                if (!Component) return null;
                return (
                    <Component
                        key={index}
                        data={section.data}
                        {...(section.title ? { title: section.title } : {})}
                    />
                );
            })}
        </>
    );
}