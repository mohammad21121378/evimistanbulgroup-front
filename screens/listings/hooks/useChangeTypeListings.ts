import { useState } from "react";
import { TypeProp } from "../types";

export function useChangeTypeListings() {

    const [type, setType] = useState<TypeProp>('list');

    const onChange = (type: TypeProp) => {
        setType(type);
        setTimeout(() => {
            window.scrollTo({
                top: 70,
                behavior: "smooth",
            });
        }, 650);
    }

    return{
        type,
        onChange
    };
}