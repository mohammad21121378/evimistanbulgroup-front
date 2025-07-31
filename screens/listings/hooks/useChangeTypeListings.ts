import { useState } from "react";
import { TypeProp } from "../types";

export function useChangeTypeListings() {

    const [type, setType] = useState<TypeProp>('list');

    const onChange = (type: TypeProp) => {
        setType(type);

        if (type === 'map') {
            document.documentElement.classList.add('no-scroll');
            document.body.classList.add('no-scroll');
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            setTimeout(() => {
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 0);
            }, 0);

        } else {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('no-scroll');
            setTimeout(() => {
                window.scrollTo({
                    top: 70,
                    behavior: "smooth",
                });
            }, 650);
        }


    }

    return {
        type,
        onChange
    };
}