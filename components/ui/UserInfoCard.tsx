import ServiceCard from "@/components/our-services/service-card/ServiceCard";
import classNames from "classnames";
import Image from "next/image";

type Props = {
    fullName: string;
    role: string;
    avatar: string;
    description: string;
    italic?: boolean
}

export default function UserInfoCard({
    fullName,
    role,
    avatar,
    description,
    italic=true
}: Props) {
    return (
        <ServiceCard className="!text-black">
            <div className="flex gap-4 items-center">

                <Image
                    className="size-24 outline outline-2 outline-slate-200 rounded-full object-cover object-top"
                    objectFit="cover"
                    objectPosition="top center"
                    src={`/images/owners/${avatar}`}
                    alt={fullName}
                    width={100}
                    height={100}
                />

                <div>
                    <h2 className="text-xl font-medium">{fullName}</h2>
                    <p className="text-slate-500 mt-1 font-normal text-base">{role}</p>
                </div>
            </div>

            <p className={classNames("text-lg leading-8 font-normal text-slate-500 whitespace-pre-line", {
                "italic": italic
            })}>{description}</p>
        </ServiceCard>
    );
}