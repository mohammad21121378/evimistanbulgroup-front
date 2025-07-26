import TeamCard from "@/components/ui/TeamCard";
import cn from "classnames";

const teamMembers = [
    {
        id: 1,
        name: 'David Lee',
        role: 'Real Estate Agent',
        avatar: '/images/team/david-lee.webp',
    },
    {
        id: 2,
        name: 'David Lee',
        role: 'Real Estate Agent',
        avatar: '/images/team/david-lee.webp',
    },
    {
        id: 3,
        name: 'David Lee',
        role: 'Real Estate Agent',
        avatar: '/images/team/david-lee.webp',
    },
    {
        id: 3,
        name: 'David Lee',
        role: 'Real Estate Agent',
        avatar: '/images/team/david-lee.webp',
    },
];

export default function OtherAgent() {
    return (
        <section className={cn("section")}>
            <div className={cn("container")}>
                <div className={cn("subheading-large")}>Our Agents</div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-11">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            name={member.name}
                            role={member.role}
                            avatar={member.avatar}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
