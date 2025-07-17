import ServiceCard from "@/components/our-services/service-card/ServiceCard";
import Image from "next/image";

type Props = {
    data: {
        fullName: string;
        role: string;
        avatar: string;
        description: string;
    }
}

export default function UserInfo({
    data
}: Props) {
    const { fullName,
        role,
        avatar,
        description } = data;
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
                    <p className="text-slate-500 mt-1 font-medium text-base">{role}</p>
                </div>
            </div>

            <p className="italic text-lg leading-8 font-normal text-slate-500">{description}</p>
        </ServiceCard>
    );
}