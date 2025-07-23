import cn from "classnames";
import { amenitiesIcons } from "../amenitiesIcons";

import styles from './AmenitiesAndServicesRender.module.css'


type Props = {
    amenities: {
        name: string;
        slug: string;
    }[]
}

export default function AmenitiesAndServicesRender({amenities}: Props) {
    return (
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 py-5 px-4">
            {
                amenities.map((amenitie) => <div className={cn("flex gap-2.5 items-center", styles.item)}> {amenitiesIcons[amenitie.slug]} {amenitie.name} </div>)
            }
        </div>
    )
}