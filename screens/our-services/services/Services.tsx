import ServiceSectionList from "@/components/our-services/service-section-list";
import { serviceSections } from "../constants";

export default function Services() {
    return(
        <ServiceSectionList sections={serviceSections} />
    )
}