import { ReactNode } from "react"

type Props = {
    label: string | ReactNode;
    id?: string
}

export default function LabelInput({label, id}: Props) {
    return(<label htmlFor={id} className="text-[#170F49] text-sm font-medium block mb-1">{label}</label>)
}