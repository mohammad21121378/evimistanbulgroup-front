import { ArrowRight } from "@/constants/icons";
import Link from "../ui/Link";

export default function BannerForGroup() {
    return (
        <div className="ring-1 ring-orange-500 rounded-lg py-4 px-6 grid grid-cols-4 items-center gap-2 mt-8 bg-slate-100 mb-1">
            <div>
                <img src="/images/logo/logo-circle.webp" alt="EvimIstanbul Group"/>
            </div>

            <div className="space-y-2.5 col-span-3">
                <h2 className="text-orange-500 font-bold text-2xl">
                    EvimIstanbul Group
                </h2>

                <p className="text-xs leading-5">
                    At EvimIstanbul Group, our team consists of trusted industry experts,  advisors, and market researchers dedicated to delivering accurate, practical, and up-to-date insights across real estate, immigration, business, education, healthcare, tourism  and lifestyle in Turkey.
                </p>

                <Link className="flex justify-end items-center text-xs font-medium gap-1 text-orange-500 [&>svg]:!w-[13px]" href={'/'}>
                    About Us
                    {ArrowRight}
                </Link>
            </div>
        </div>
    );
}