import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string
}

export default function ServiceCard({children, className}: Props) {
    return(
        <div className="bg-slate-100 outline outline-1 outline-slate-200 md:p-11 p-6 rounded-3xl">
            <div className={classNames("bg-white rounded-3xl md:py-8 md:px-11 px-6 py-6 space-y-6 text-slate-500", className)}>
                {children}
            </div>
        </div>
    );
}