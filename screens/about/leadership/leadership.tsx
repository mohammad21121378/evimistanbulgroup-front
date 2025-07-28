import React from "react";
import styles from "./leadership.module.css";
import cn from "classnames";
import UserInfoCard from "@/components/ui/UserInfoCard";

const leadership = [
  {
    id: 1,
    avatar: "MEISAM-KHERADMAND-3.png",
    fullName: "Meisam Kheradmand",
    role: "Chairman of the Board & CEO",
    description:
      "Meisam Kheradmand is a visionary real estate developer with over a decade of experience in property investment, construction, and high-end client services. As the founder and CEO of EvimIstanbul İNŞAAT, he is legally responsible for all operations, transactions, and corporate governance under the brand. Known for his vast Gulf-Turkey investment network and market insight, he leads the company’s expansion with integrity, precision, and an unwavering focus on client trust and long-term value.",
  },
  {
    id: 2,
    avatar: "reza-abbaszadeh.png",
    fullName: "Reza Abbaszadeh",
    role: "Technology Partner & CTO",
    description:
      "Reza Abbaszadeh is a tech entrepreneur and AI strategist driving innovation at the intersection of property technology, healthcare, and education. As the CTO of EvimIstanbul Group, he leads all digital transformation efforts — from AI-powered CRM systems to cybersecurity, automation, and infrastructure design. Beyond EvimIstanbul, Reza is the founder and CEO of Abbaszadeh Holdings, the parent company behind ventures like Doktorify (AI-powered health assistant), AiMed Solutions (clinical simulation for medical education) and FacultyFind (AI-based academic recruitment).\n\nWith global experience spanning Silicon Valley, Europe, and the Middle East, Reza Abbaszadeh is known for building scalable, secure, and visionary platforms that bridge industries and redefine user experience.",
  },
  {
    id: 3,
    avatar: "OMID-GHAFOURI.png",
    fullName: "Omid Ghafouri",
    role: "Director of Client Relations",
    description:
      "Omid Ghafouri with more than 15 years of experience in international property consultancy, Omid Ghafouri leads EvimIstanbul’s client engagement and investor support division. His deep understanding of client expectations—especially among Gulf and European investors—allows him to provide customized, trustworthy guidance from inquiry to closing. Omid is known for combining professionalism with a personal touch, ensuring a smooth, transparent, and rewarding experience for every client.",
  },
  {
    id: 4,
    avatar: "Mohamad Aziz Sultan 3.jpg",
    fullName: "Mohamad Aziz Sultan",
    role: "Board Member & CMO",
    description:
      "Mohamad Aziz Sultan is an international marketing executive and strategic board member with deep roots in real estate and investment markets across the Middle East and Europe. As CMO, he oversees global outreach, branding strategies, and lead generation initiatives. His cross-cultural fluency and track record in scaling real estate brands have been instrumental in positioning EvimIstanbul as a top-tier choice for foreign investors and lifestyle seekers in Turkey.",
  },
  {
    id: 5,
    avatar: "Hamidreza-Akhavannia.jpg",
    fullName: "Hamidreza Akhavannia",
    role: "Client Relationship Manager",
    description:
      "Hamidreza Akhavannia is a multilingual real estate advisor with hands-on expertise in Turkish residency, investment permits, and property acquisition. His strength lies in supporting clients throughout the legal, lifestyle, and bureaucratic process of settling in Turkey. Known for his detail-oriented approach and cultural empathy, he acts as a bridge between international buyers and local institutions—making relocation, rentals, and transactions seamless and worry-free.",
  },
  {
    id: 6,
    avatar: "ahmadreza-shahverdi.png",
    fullName: "Ahmadreza Shahverdi",
    role: "Chief Technology Officer",
    description:
      "Ahmadreza Shahverdi is a seasoned software architect and infrastructure expert leading EvimIstanbul’s digital transformation. With a background in enterprise systems, database optimization, and secure API development, he oversees the core technologies that power our AI tools, CRM platform, and client portals. His commitment to performance, scalability, and data protection ensures our digital backbone is future-proof and globally competitive.",
  },
];


export default function Leadership() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <h2 className={cn("subheading-large")}>LEADERSHIP TEAM</h2>

        <div className={styles.leadership}>
          {leadership.map((leader) => (
            <UserInfoCard {...leader} italic={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
