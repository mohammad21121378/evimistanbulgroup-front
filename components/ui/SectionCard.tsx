import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string
}

export default function SectionCard({ children, className }: Props) {
    return (
        <div className={classNames("bg-slate-100 outline outline-1 outline-slate-200 md:p-11 p-6 rounded-3xl", className)}>
            {children}
        </div>
    );
}