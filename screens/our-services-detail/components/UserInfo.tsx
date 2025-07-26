import ServiceCard from "@/components/our-services/service-card/ServiceCard";
import UserInfoCard from "@/components/ui/UserInfoCard";
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
    return (
        <UserInfoCard {...data} />
    );
}