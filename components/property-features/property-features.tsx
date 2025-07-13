import React from "react";
import styles from "./property-features.module.css";
import cn from "classnames";
import {
  DoubleBed,
  Bath,
  Ruler,
  Floor,
  Parking,
  DockDoor,
  Walk,
} from "@/constants/icons";

type PropertyFeaturesProps = {
  className?: string;
  features: {
    id: number;
    icon: string;
    name: string;
    value: string | number;
  }[];
};

const iconMap: { [key: string]: React.ReactNode } = {
  "double-bed": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.7871 12.119V7.18486C18.7871 6.52936 18.7871 6.20161 18.6925 5.93888C18.531 5.49021 18.1778 5.13698 17.7291 4.97545C17.4664 4.88086 17.1386 4.88086 16.4831 4.88086H7.51884C6.86335 4.88086 6.5356 4.88086 6.27286 4.97545C5.8242 5.13698 5.47096 5.49021 5.30943 5.93888C5.21484 6.20161 5.21484 6.52936 5.21484 7.18486V12.119" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.002 9.58105H15.979" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 9.58105H9.97709" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M21 19.1191V14.4231C21 13.7676 21 13.4399 20.9054 13.1772C20.7439 12.7285 20.3906 12.3753 19.942 12.2137C19.6792 12.1191 19.3515 12.1191 18.696 12.1191H5.304C4.6485 12.1191 4.32076 12.1191 4.05802 12.2137C3.60935 12.3753 3.25612 12.7285 3.09459 13.1772C3 13.4399 3 13.7676 3 14.4231V19.1191" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 17.8809H21" stroke="#EA580C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  ,
  bath: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5613 18.8705H7.43968C4.98778 18.8705 3 16.8837 3 14.4318V13.6495C3 12.9305 3.58281 12.3486 4.30086 12.3486H19.6991C20.4182 12.3486 21 12.9305 21 13.6495V14.4318C21 16.8837 19.0132 18.8705 16.5613 18.8705Z" stroke="#005ED1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.945 12.3477V5.30238C18.945 4.06573 17.8455 3.11903 16.6225 3.30389L14.7485 3.58606C13.76 3.73492 13.0293 4.58433 13.0293 5.58454V6.58962" stroke="#005ED1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0059 8.42939C11.0059 7.38441 11.9652 6.54182 13.1289 6.59144C14.2176 6.63814 15.0554 7.49047 15.0554 8.48095C15.0554 8.67263 14.8841 8.82831 14.673 8.82831H11.3882C11.1771 8.82831 11.0059 8.67263 11.0059 8.48095V8.42939Z" stroke="#005ED1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.43904 18.8701L6.07031 20.7189" stroke="#005ED1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.0682 20.7188L16.6992 18.8701" stroke="#005ED1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  ,
  ruler: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5029 19.7728L19.4706 10.8041C20.627 9.64878 20.627 7.77415 19.4706 6.61781L17.0804 4.22666C15.9241 3.07126 14.0495 3.07126 12.8931 4.22666L3.92539 13.1953C2.76905 14.3516 2.76905 16.2263 3.92539 17.3817L6.3156 19.7728C7.47195 20.9292 9.34657 20.9292 10.5029 19.7728Z" stroke="#C64B4B" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.3543 4.7644L15.3144 7.72438" stroke="#C64B4B" stroke-width="1.44" stroke-linecap="round" />
    <path d="M4.46249 12.658L6.7649 14.9604" stroke="#C64B4B" stroke-width="1.44" stroke-linecap="round" />
    <path d="M7.12405 9.99561L10.0522 12.9864" stroke="#C64B4B" stroke-width="1.44" stroke-linecap="round" />
    <path d="M9.72375 7.39502L11.3677 9.03893" stroke="#C64B4B" stroke-width="1.44" stroke-linecap="round" />
  </svg>
  ,
  floor: Floor,
  parking: Parking,
  "dock-door": DockDoor,
  walk: Walk,
};

export default function PropertyFeatures({
  className,
  features,
}: PropertyFeaturesProps) {
  return (
    <div className={cn(styles.features, className)}>
      {
        features ?
          <>
            {features.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                {iconMap[feature.icon]}
                <div className={cn("paragraph-small text-gray-500", styles.feature_name)}>
                 {feature.value} {feature.name}
                </div>
              </div>
            ))}
          </>
          :
          <div className={styles.feature}> </div>
      }
    </div>
  );
}
