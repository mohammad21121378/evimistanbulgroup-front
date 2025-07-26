import React from "react";
import styles from "./hero.module.css";
import SectionTopWithColor from "@/components/section-top-with-color";

export default function Hero() {
  return (
    <>
      <SectionTopWithColor
      className="lg:!h-[40rem] sm:!h-[68rem] !h-[50rem]"
      titleClassName="lg:!mt-auto !mt-5"
        bg={styles.section}
        breadcrumb={[{ label: 'Our Story & Mission & Values' }]}
        noneAnimate
        titleSm
        title={`Our Story & \nMission & Values`}>
          <img src="/images/EvimIstanbul LOGO Official With Border And Shadow.webp" alt="EvimIstanbul Group®"  className="absolute xl:size-[28rem] size-[26rem] xl:-right-24 lg:-right-40 right-0 mx-auto left-0 lg:left-[unset] bottom-0 animate-bounce-sm" />
      </SectionTopWithColor>
    </>
  );
}
