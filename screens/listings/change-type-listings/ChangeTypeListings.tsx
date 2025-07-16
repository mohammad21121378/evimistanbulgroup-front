import classNames from "classnames";
import { TypeProp, onChangeType } from "../types";

const types = ['list', 'map'] as const;

const icons = {
    list: <svg width="1.1rem" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L19 1M1 7L19 7M0.999999 13L19 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    map: <svg width="1.1rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 4V19M13 4L19 1V16L13 19M13 4L7 1M13 19L7 16M7 16L1 19V4L7 1M7 16V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>        
}

type Props = {
    type: TypeProp;
    onChange: onChangeType
}

export default function ChangeTypeListings({ type, onChange }: Props) {
    return (
        <div className="flex items-center bg-slate-100 outline outline-1 outline-slate-200 h-11 rounded-lg overflow-hidden text-base mb-4">
            {
                types.map((item: TypeProp) =>
                    <button className={classNames(
                        "capitalize transition-all duration-300 font-medium text-center h-11 w-full flex gap-2.5 items-center justify-center rounded-lg",
                        { "bg-orange-500 text-white hover:bg-orange-600" : item === type },
                        { "bg-transparent text-black hover:bg-slate-200" : item !== type }
                        )} onClick={() => onChange(item)}>
                            {icons[item]}
                        {item}
                    </button>
                    )
            }
        </div>
    );
}