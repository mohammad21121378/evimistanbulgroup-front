import { useState } from "react";
import { TypeProp } from "../types";

export function useChangeTypeListings() {

    const [type, setType] = useState<TypeProp>('list');

    const onChange = (type: TypeProp) => {
        setType(type);
        window.scrollTo({
            top: 70,
            behavior: "smooth",
        });
    }

    return{
        type,
        onChange
    };
}