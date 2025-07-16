import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    options?: string[]
}

const Icon = <svg
xmlns="http://www.w3.org/2000/svg"
className="text-gray-600"
width="1.9rem"
height="1.9rem"
viewBox="0 0 11470 12800"
preserveAspectRatio="xMidYMid meet"
>
<g transform="translate(0,12800) scale(1,-1)" fill="currentColor" stroke="none">
  <path d="M11470 12790 c-599 -46 -909 -119 -1270 -300 -220 -110 -505 -292
 -762 -487 -184 -140 -261 -215 -294 -288 -41 -94 -129 -214 -379 -515 -709
 -855 -2058 -2659 -3166 -4235 -542 -770 -735 -1061 -930 -1396 -124 -215 -160
 -271 -264 -409 -87 -116 -292 -423 -525 -785 -327 -509 -473 -719 -642 -920
 -121 -144 -106 -140 -171 -43 -67 102 -106 180 -187 373 -205 490 -513 1142
 -610 1289 -145 221 -291 284 -630 273 -265 -9 -475 -68 -770 -216 -384 -193
 -699 -463 -810 -696 -122 -255 -69 -573 300 -1800 351 -1169 523 -1632 746
 -2012 114 -195 257 -418 278 -436 56 -48 231 -96 507 -142 359 -59 701 -59
 1056 1 298 49 498 128 596 234 146 157 391 499 934 1305 340 504 513 753 592
 850 79 96 104 134 216 330 164 285 387 620 954 1430 1153 1649 2600 3623 2920
 3985 102 115 125 145 326 435 227 326 340 476 443 587 145 157 341 398 737
 908 321 414 601 760 755 935 318 362 738 975 834 1216 71 181 57 313 -42 414
 -44 45 -134 89 -217 105 -78 15 -378 21 -525 10z"/>
</g>
</svg>
;

export default function TitleServiceCard({ children, options }: Props) {

    const optionsContent = options?.map(option => {
        switch (option) {
            case "icon":
                return Icon;
            default:
                return '';
        }
    })

    return (
        <h2 className="text-slate-500 font-bold text-3xl flex items-center gap-1.5">
            {optionsContent}
            {children}
        </h2>
    )
}