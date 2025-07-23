"use client";

import React, { ReactNode } from "react";
import styles from "./overview.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import PropertyFeatures from "@/components/property-features";
import { Plus, Print, Share } from "@/constants/icons";
import classNames from "classnames";
import TableOfContents from "@/components/table-of-contents";
import { details } from "../contsants";
import { PropertyType } from "@/types/Property";
import ShareBox from "../share-box";
import ExpandableHtml from "@/components/expandable-html/ExpandableHtml";
import SingleLocationMap from "@/components/single-location-map";
import { amenitiesIcons } from "../amenitiesIcons";
import AmenitiesAndServicesRender from "./AmenitiesAndServicesRender";



type OverviewProps = PropertyType;

export default function Overview({ item }: OverviewProps) {
  const [open, setOpen] = React.useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container grid md:grid-cols-10 gap-10 grid-cols-1", styles.container)}>

        <div className={cn(styles.content, 'md:col-span-7')}>
          <h2>
            <Heading type="heading-4">Property Overview</Heading>
          </h2>

          <div className="sm:grid sm:grid-cols-12 justify-center grid-cols-1 items-center ">

            <PropertyFeatures
              features={
                item.features.map((feature) => ({
                  ...feature,
                  name:
                    (feature.name === "ba" || feature.name === "bd")
                      ? feature.full_name ?? feature.name
                      : feature.name,
                }))
              }
              className={`${styles.features} sm:col-span-6`}
            />

            {item.status === "sold_out" && (<div className="button sm:col-span-4 sm:my-0 !font-bold my-4 button-red w-full button-small">
              ALREADY SOLD
            </div>)}

            <div className="sm:col-span-2 text-sm text-gray-500 text-center">
              {item.created_at}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-5 ">
            {
              item.special_features && item.special_features?.length > 1 && item.special_features
                .map(item =>
                  <div className="bg-[#002DD1] py-2 pl-2.5 pr-3.5 rounded-md flex gap-2 items-center text-white text-sm font-bold">
                    <svg width="1.1rem" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44077 1.59998C4.65294 1.59998 4.85643 1.68426 5.00646 1.83429C5.15649 1.98432 5.24077 2.1878 5.24077 2.39998V3.19998H6.04077C6.25294 3.19998 6.45643 3.28426 6.60646 3.43429C6.75649 3.58432 6.84077 3.7878 6.84077 3.99998C6.84077 4.21215 6.75649 4.41563 6.60646 4.56566C6.45643 4.71569 6.25294 4.79998 6.04077 4.79998H5.24077V5.59998C5.24077 5.81215 5.15649 6.01563 5.00646 6.16566C4.85643 6.31569 4.65294 6.39998 4.44077 6.39998C4.2286 6.39998 4.02512 6.31569 3.87509 6.16566C3.72506 6.01563 3.64077 5.81215 3.64077 5.59998V4.79998H2.84077C2.6286 4.79998 2.42512 4.71569 2.27509 4.56566C2.12506 4.41563 2.04077 4.21215 2.04077 3.99998C2.04077 3.7878 2.12506 3.58432 2.27509 3.43429C2.42512 3.28426 2.6286 3.19998 2.84077 3.19998H3.64077V2.39998C3.64077 2.1878 3.72506 1.98432 3.87509 1.83429C4.02512 1.68426 4.2286 1.59998 4.44077 1.59998ZM4.44077 9.59998C4.65294 9.59998 4.85643 9.68426 5.00646 9.83429C5.15649 9.98432 5.24077 10.1878 5.24077 10.4V11.2H6.04077C6.25294 11.2 6.45643 11.2843 6.60646 11.4343C6.75649 11.5843 6.84077 11.7878 6.84077 12C6.84077 12.2121 6.75649 12.4156 6.60646 12.5657C6.45643 12.7157 6.25294 12.8 6.04077 12.8H5.24077V13.6C5.24077 13.8121 5.15649 14.0156 5.00646 14.1657C4.85643 14.3157 4.65294 14.4 4.44077 14.4C4.2286 14.4 4.02512 14.3157 3.87509 14.1657C3.72506 14.0156 3.64077 13.8121 3.64077 13.6V12.8H2.84077C2.6286 12.8 2.42512 12.7157 2.27509 12.5657C2.12506 12.4156 2.04077 12.2121 2.04077 12C2.04077 11.7878 2.12506 11.5843 2.27509 11.4343C2.42512 11.2843 2.6286 11.2 2.84077 11.2H3.64077V10.4C3.64077 10.1878 3.72506 9.98432 3.87509 9.83429C4.02512 9.68426 4.2286 9.59998 4.44077 9.59998ZM10.0408 1.59998C10.2173 1.59992 10.3889 1.65827 10.5289 1.76593C10.6688 1.87358 10.7692 2.02451 10.8144 2.19518L11.7576 5.75997L14.4408 7.30718C14.5624 7.37739 14.6634 7.47838 14.7336 7.59999C14.8038 7.7216 14.8407 7.85955 14.8407 7.99998C14.8407 8.1404 14.8038 8.27835 14.7336 8.39996C14.6634 8.52157 14.5624 8.62256 14.4408 8.69278L11.7576 10.2408L10.8136 13.8048C10.7683 13.9753 10.6679 14.126 10.5281 14.2336C10.3883 14.3411 10.2168 14.3994 10.0404 14.3994C9.86396 14.3994 9.69249 14.3411 9.55266 14.2336C9.41282 14.126 9.31245 13.9753 9.26717 13.8048L8.32397 10.24L5.64077 8.69278C5.51917 8.62256 5.41818 8.52157 5.34798 8.39996C5.27777 8.27835 5.24081 8.1404 5.24081 7.99998C5.24081 7.85955 5.27777 7.7216 5.34798 7.59999C5.41818 7.47838 5.51917 7.37739 5.64077 7.30718L8.32397 5.75918L9.26797 2.19518C9.31313 2.02464 9.4134 1.87381 9.55316 1.76617C9.69293 1.65852 9.86436 1.6001 10.0408 1.59998Z" fill="white" />
                    </svg>
                    <span className="-mt-0.5">

                      {item.title}
                    </span>

                  </div>
                )
            }
          </div>

          <div className={cn("paragraph-medium", styles.description)} dangerouslySetInnerHTML={{ __html: item.content ?? '' }}></div>

          <div className={styles.details}>
            {details.map((detail) => {
              const content = item[detail.slug];
              if (!content) return null;

              const isLocationAndLifestyle = detail.slug === "location_and_lifestyle";
              const isAmenitiesAndServices = detail.slug === "amenities_and_services";
              const isVirtualTourVideo = detail.slug === "virtual_tour_video";
              const hasCoordinates = item.latitude && item.longitude;              

              let amenitiesAndServicesContent: null | ReactNode = null;

              if (isAmenitiesAndServices && item.amenities && item.amenities.length) {
                amenitiesAndServicesContent = <AmenitiesAndServicesRender amenities={item.amenities} />
              }

              return (
                <div key={detail.id} className="mb-6">
                  <h2
                    className="cursor-pointer font-semibold text-lg text-gray-800 mb-2"
                    onClick={() => toggleOpen(detail.id)}
                  >
                    {detail.title}
                  </h2>

                  {
                    amenitiesAndServicesContent
                  }

                  {isLocationAndLifestyle && hasCoordinates && !amenitiesAndServicesContent && (
                    <div className="mt-8 mb-4 px-4">
                      <SingleLocationMap
                        lat={Number(item.latitude)}
                        lng={Number(item.longitude)}
                      />
                    </div>
                  )}
                  {
                    !amenitiesAndServicesContent &&
                    <ExpandableHtml html={content} showAll={!!isVirtualTourVideo} />
                  }
                  <hr className="bg-gray-200 mb-9 mt-5 w-full relative" />

                </div>
              );
            })}

            {/* {open === detail.id && ( */}
            {/* )} */}
            {/*<ul className={cn(
            styles.list,
            { [styles.listOpen]: open === detail.id }
          )}>
            {detail.features.map((feature) => (
              <li
                key={feature.id}
                className={cn("paragraph-medium", styles.list_item)}
              >
                {feature.text}
              </li>
            ))}
          </ul>*/}
          </div>
        </div>

        <div className={`md:col-span-3 w-full overflow-visible h-full`}>

          <div className=" sticky top-28">
            {item.agent && <div className={classNames("p-4 w-full gap-3 flex justify-center items-center bg-slate-100", styles.agent)}>

              <svg className="size-20" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86 43C86 66.7482 66.7482 86 43 86C19.2518 86 0 66.7482 0 43C0 19.2518 19.2518 0 43 0C66.7482 0 86 19.2518 86 43ZM3.44 43C3.44 64.8484 21.1516 82.56 43 82.56C64.8484 82.56 82.56 64.8484 82.56 43C82.56 21.1516 64.8484 3.44 43 3.44C21.1516 3.44 3.44 21.1516 3.44 43Z" fill="#E8E6F9" />
                <path d="M43 1.72C43 0.77007 43.7705 -0.003591 44.7196 0.0343934C51.5951 0.309538 58.3132 2.23134 64.3047 5.64884C70.7949 9.35078 76.2085 14.68 80.0119 21.1112C83.8153 27.5425 85.8773 34.8538 85.9947 42.3246C86.1121 49.7954 84.2807 57.1679 80.6812 63.7154C77.0816 70.2629 71.8382 75.7596 65.4674 79.6635C59.0967 83.5675 51.8187 85.7441 44.3507 85.9788C36.8826 86.2135 29.4823 84.4982 22.879 81.0019C16.7831 77.7743 11.5607 73.1317 7.64437 67.4741C7.10371 66.693 7.3441 65.6279 8.14615 65.1189C8.9482 64.6099 10.008 64.85 10.5513 65.6291C14.1455 70.783 18.9211 75.0139 24.4887 77.9618C30.5637 81.1783 37.372 82.7564 44.2426 82.5405C51.1132 82.3246 57.809 80.3221 63.67 76.7304C69.5311 73.1388 74.3551 68.0819 77.6667 62.0582C80.9783 56.0344 82.6631 49.2518 82.5551 42.3786C82.4472 35.5055 80.5501 28.7791 77.051 22.8623C73.5518 16.9456 68.5713 12.0427 62.6003 8.63694C57.1281 5.51561 50.997 3.75047 44.7195 3.47738C43.7705 3.4361 43 2.66993 43 1.72Z" fill="#002DD1" />
                {/* <rect x="7.16602" y="7.16663" width="71.6667" height="71.6667" rx="32" fill="#DBC0DD" /> */}
                <rect x="7.16602" y="7.16663" width="71.6667" height="71.6667" rx="32" fill="url(#pattern0_6319_9488)" />
                <defs>
                  <pattern id="pattern0_6319_9488" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_6319_9488" transform="scale(0.0015625)" />
                  </pattern>
                  <image
                    id={`image0_6319_9488`}
                    href={item.agent && item.agent.image}
                    width="640" height="640" preserveAspectRatio="none"
                    className="rounded-full"
                  />
                </defs>
              </svg>

              <div>
                <p className="text-[.81rem] font-bold mb-2">
                  Property Code: #{item.id}
                </p>
                <button className="button button-small text-[.81rem]">
                  Book A Free Consultation
                </button>
              </div>
            </div>}

            <div className="md:grid hidden mt-5">
              <TableOfContents hasCustomizeIcon />
            </div>
            <div className="flex justify-around mt-5 lg:px-10">
              <div className="flex gap-1 font-semibold items-center">
                {Print}
                Print
              </div>
              <ShareBox url={item.url}>
                <div className="flex gap-1 font-semibold items-center">
                  {Share}
                  Share
                </div>
              </ShareBox>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
