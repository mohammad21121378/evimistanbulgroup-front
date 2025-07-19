import { DataType } from "../types"
import {components} from '../components'

type Props = {
    data: DataType
}

export function useComponentExtraction({ data }: Props) {

    const introductionSection = data.sections.find((section) => section.type === "introduction");
    const marqueeSection = data.sections.find((section) => section.type === "marquee");
    const usHelpSection = data.sections.find((section) => section.type === "usHelp");
    const mainSections = data.sections.filter(
        (section) => section.type !== "introduction" && section.type !== "usHelp" &&  section.type !== "marquee"
    );

    return {
        introductionSection,
        usHelpSection,
        mainSections,
        marqueeSection,
        components
    }
}