import React from "react";
import styles from "./team.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "@/constants/icons";

const team_members = [
  {
    id: 1,
    image: "/images/team/emily-davis.webp",
    name: "Emily Davis",
    title: "Real Estate Agent",
    socials: [
      {
        id: 1,
        icon: Instagram,
        link: "#",
      },
      {
        id: 2,
        icon: Facebook,
        link: "#",
      },
      {
        id: 3,
        icon: Linkedin,
        link: "#",
      },
    ],
  },
  {
    id: 2,
    image: "/images/team/michael-brown.webp",
    name: "Michael Brown",
    title: "Real Estate Specialist",
    socials: [
      {
        id: 1,
        icon: Instagram,
        link: "#",
      },
      {
        id: 2,
        icon: Facebook,
        link: "#",
      },
      {
        id: 3,
        icon: Linkedin,
        link: "#",
      },
    ],
  },
  {
    id: 3,
    image: "/images/team/david-lee.webp",
    name: "David Lee",
    title: "Real Estate Agent",
    socials: [
      {
        id: 1,
        icon: Instagram,
        link: "#",
      },
      {
        id: 2,
        icon: Facebook,
        link: "#",
      },
      {
        id: 3,
        icon: Linkedin,
        link: "#",
      },
    ],
  },
];

export default function Team() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Meet Our Expert Agents</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Our team of dedicated and experiences agents is here to guide you through every step of your real estate journey."
              }
            </div>
          </div>

          <button className={cn("button button-primary")}>Meet Our Team</button>
        </div>

        <div className={styles.team_members}>
          {team_members.map((member) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
