import { useState } from "react";
import { TypeProp } from "../types";

export function useChangeTypeListings() {

    const [type, setType] = useState<TypeProp>('list');

    const onChange = (type: TypeProp) => {
        setType(type);

        if (type === 'map') {            
            
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            
        } else {
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
// document.documentElement.classList.add('no-scroll');
// document.body.classList.add('no-scroll');
// document.documentElement.classList.remove('no-scroll');
// document.body.classList.remove('no-scroll');