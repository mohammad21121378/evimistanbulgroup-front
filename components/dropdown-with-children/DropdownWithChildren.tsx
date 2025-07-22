import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
    svg?: ReactNode,
    title: string | ReactNode,
    children: ReactNode;
    svgArrow?: boolean;
    open: boolean;
    onToggle: () => void;
}

export default function DropdownWithChildren({
    svg,
    title,
    children,
    svgArrow=true,
    open,
    onToggle,
}: Props) {

    const wrapperRef = useRef<HTMLDivElement>(null);

    // const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (
            open &&
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Node)
          ) {
            onToggle(); // بستن باکس
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open, onToggle]);



    return (
        <div className="bg-white rounded-xl pointer-events-auto" ref={wrapperRef}>

            <div className="flex justify-between items-center cursor-pointer py-3 px-4 z-10" onClick={onToggle}>

                <div className="flex items-center gap-2 text-slate-500 font-semibold text-base truncate">
                    <div>
                        {svg}
                    </div>

                    <div className="truncate">
                        {title}
                    </div>
                </div>

                {
                    svgArrow &&
                    <div className={classNames(open ? 'rotate-0' : 'rotate-180', 'transition-all duration-500')}>
                        <svg
                            width={11}
                            height={11}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.44481 0.139914L0.141323 4.44483C-0.0470974 4.63373 -0.0470974 4.93978 0.141323 5.12915C0.329743 5.31805 0.635787 5.31805 0.824206 5.12915L4.78623 1.16569L8.74826 5.12867C8.93668 5.31757 9.24272 5.31757 9.43162 5.12867C9.62004 4.93977 9.62004 4.63326 9.43162 4.44436L5.12817 0.139437C4.9417 -0.0465586 4.63085 -0.0465586 4.44481 0.139914Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                }

            </div>

            <div className={classNames(open ? 'max-h-52 opacity-1 px-3 pb-5' : 'max-h-px opacity-0', 'transition-all overflow-y-auto scrollbar-sm duration-500')}>
                {children}
            </div>
        </div>
    );
}