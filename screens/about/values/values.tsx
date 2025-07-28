import React from "react";
import styles from "./values.module.css";
import cn from "classnames";

const values = [
  {
    id: 1,
    icon: <svg width="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9986 21.0808C11.9986 21.0808 19.0292 18.9521 19.0292 13.0834C19.0292 7.21475 19.2842 6.75987 18.72 6.19103C18.155 5.62125 12.9205 3.80078 11.9986 3.80078C11.0767 3.80078 5.84139 5.62592 5.27624 6.19103C4.71214 6.75519 4.96808 7.21381 4.96808 13.0834C4.96808 18.9531 11.9986 21.0808 11.9986 21.0808Z" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 21.0808V3.80078" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ,
    title: "Integrity & Legal Compliance",
    description:
      "Every service we offer — from title deed transfers to citizenship applications — is conducted with full legal transparency, official documentation, and expert compliance with Turkish laws.",
  },
  {
    id: 2,
    icon: <svg width="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.51047 11.5274L10.8163 19.5542C11.4507 20.2518 12.5482 20.2518 13.1825 19.5542L20.4894 11.5264C21.1004 10.8561 21.1704 9.85395 20.6596 9.10381L17.7174 4.78197C17.3526 4.24685 16.7455 3.92578 16.0975 3.92578H7.91111C7.26312 3.92578 6.65698 4.24588 6.29212 4.781L3.34117 9.10381C2.8294 9.85298 2.89946 10.8561 3.51047 11.5274Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.0009 3.92578L15.3679 9.10381C15.5663 9.85395 15.5391 10.8561 15.3017 11.5264L12.4617 19.5542C12.2155 20.2518 11.7884 20.2518 11.5422 19.5542L8.70215 11.5274C8.46475 10.8561 8.43751 9.85298 8.63696 9.10381L10.0079 3.92578" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.00781 10.2031H20.9908" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ,
    title: "End-to-End Support",
    description:
      "We go beyond consultancy. From airport pickups to notary appointments, our multilingual team walks with you — step by step — until the last document is signed and the keys are in your hand.",
  },
  {
    id: 3,
    icon: <svg width="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.738 15.544C7.40297 14.5595 5.76562 12.2469 5.76562 9.54665C5.76562 5.4855 9.47278 2.29859 13.6777 3.15043C16.1669 3.65948 18.1807 5.66203 18.7009 8.15216C19.3763 11.4054 17.6054 14.4045 14.8836 15.5553V17.7185C14.8836 19.1336 13.7255 20.2917 12.3113 20.2917C10.8962 20.2917 9.738 19.1336 9.738 17.7185V15.544Z" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5469 15.5586H14.8875" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.57031 8.86053C9.57031 7.66776 10.6584 6.73187 11.8933 6.98219" stroke="white" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ,
    title: "Trust & Confidentiality",
    description:
      "Our team handles every case with the utmost confidentiality and ethics. Your personal data, legal status, and financial details are protected with advanced data security protocols and non-disclosure standards.",
  },
  {
    id: 4,
    icon: <svg width="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C7.02908 21 3 16.9709 3 12C3 7.02908 7.02908 3 12 3C16.9709 3 21 7.02908 21 12C21 16.9709 16.9709 21 12 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.3854 19.0979C17.3854 19.0979 15.2078 13.0956 21.0019 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.1128 8.08773C19.1768 8.02254 17.4722 8.30276 14.9716 10.1008C11.9943 12.2453 11.3103 7.71314 12.256 3.0127" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.5934 21.0001C11.5934 21.0001 12.2064 18.4636 10.4521 17.0917C8.69786 15.7207 7.38726 15.821 7.16932 14.0774C6.95137 12.3338 9.10359 12.041 7.52932 9.44609C6.49018 7.73268 5.31678 6.66046 5.36056 5.95117" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ,
    title: "Global Perspective, Local Expertise",
    description:
      "Our consultants come from both local and international backgrounds — giving us the cultural intelligence and legal expertise to serve clients from Europe, the Middle East, Central Asia, and beyond.",
  },
];


export default function Values() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <h2 className={cn("subheading-large")}>OUR VALUES</h2>

        <div className={styles.values}>
          {values.map((value) => (
            <div key={value.id} className={styles.value}>
              <div className={cn("gradient-bubble")}>{value.icon}</div>

              <div className={cn("text-2xl font-semibold", styles.value_title)}>
                {value.title}
              </div>
              <div className={cn("text-base leading-relaxed text-slate-500", styles.value_description)}>
                {value.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
