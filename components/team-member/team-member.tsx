import React from "react";
import cn from "classnames";
import styles from "./team-member.module.css";
import Image from "next/image";

type TeamMemberProps = {
  member: {
    id: number;
    name: string;
    title: string;
    image: string;
    socials: {
      id: number;
      icon: React.ReactNode;
    }[];
  };
};

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div key={member.id} className={styles.team_member}>
      <div className={styles.member_image}>
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.member_info}>
        <div>
          <div className={cn("paragraph-x-large", styles.member_name)}>
            {member.name}
          </div>
          <div className={cn("paragraph-medium", styles.member_title)}>
            {member.title}
          </div>
        </div>

        <div className={styles.member_socials}>
          {member.socials.map((social) => (
            <a key={social.id} className={styles.member_social}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
