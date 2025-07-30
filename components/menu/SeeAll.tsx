import classNames from "classnames";
import Link from "../ui/Link";

type Props = {
    href?: string;
    className?: string
}

export default function SeeAll({ href, className }: Props) {
    return (

        <Link href={href ? href : '/'} className={classNames("flex pr-3 pl-px text-slate-400 hover:text-orange-500 transition-all duration-500 items-center font-semibold gap-1.5 text-sm pt-2.5", className)}>
            See all

            <svg width="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0719 1.16667L15.9053 7.00001M15.9053 7.00001L10.0719 12.8333M15.9053 7.00001L1.90527 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </Link>
    )
}