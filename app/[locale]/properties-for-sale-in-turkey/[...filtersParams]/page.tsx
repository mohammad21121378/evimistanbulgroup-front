// // app/properties-for-sale-in-turkey/[...filtersParam]/page.tsx
// import ListingsPage from "@/screens/listings";
// import fetchProperties from "@/helpers/api/property/properties";
// import { ListingsType } from "@/types/Property";
// import { decodeSlugToFilters, SeoFilters } from "@/utils/seoFilters";
// import { notFound } from "next/navigation";

// type Props = {
//   params: {
//     locale: string;
//     filtersParam?: string[];
//   };
// };

// // function buildTitleFromFilters(filters: SeoFilters): string {
// //   const parts: string[] = ["Properties for sale in Turkey"];

// //   if (filters.bedroomsSelected) {
// //     parts.push(`${filters.bedroomsSelected[0]}-${filters.bedroomsSelected[1]} Beds`);
// //   }
// //   if (filters.featureSelected) {
// //     parts.push(`Feature: ${filters.featureSelected[0]}`);
// //   }
// //   if (filters.propertyTypesSelected) {
// //     parts.push(`Type: ${filters.propertyTypesSelected[0]}`);
// //   }
// //   if (filters.sortOption) {
// //     parts.push(`Sorted by ${filters.sortOption.replace("-", " ")}`);
// //   }
// //   if (filters.currentPage && filters.currentPage > 1) {
// //     parts.push(`Page ${filters.currentPage}`);
// //   }

// //   return parts.join(" | ");
// // }

// // export async function generateMetadata({ params }: { params: { locale: string; filtersParam?: string[] } }) {
// //   const filters = decodeSlugToFilters(params.filtersParam || []);

// //   const title = buildTitleFromFilters(filters);
// //   const descriptionParts: string[] = ["Find properties for sale in Turkey"];

// //   if (filters.propertyTypesSelected) {
// //     descriptionParts.push(`Type: ${filters.propertyTypesSelected[0]}`);
// //   }
// //   if (filters.bedroomsSelected) {
// //     descriptionParts.push(`Bedrooms: ${filters.bedroomsSelected[0]}-${filters.bedroomsSelected[1]}`);
// //   }
// //   if (filters.featureSelected) {
// //     descriptionParts.push(`Feature: ${filters.featureSelected[0]}`);
// //   }
// //   if (filters.sortOption) {
// //     descriptionParts.push(`Sorted by ${filters.sortOption.replace("-", " ")}`);
// //   }
// //   if (filters.currentPage && filters.currentPage > 1) {
// //     descriptionParts.push(`Page ${filters.currentPage}`);
// //   }

// //   return {
// //     title,
// //     description: descriptionParts.join(" • "),
// //     openGraph: {
// //       title,
// //       description: descriptionParts.join(" • "),
// //     },
// //   };
// // }

// export default async function SeoListings({ params }: Props) {
//   const locale = params.locale;
//   const filtersParam = params.filtersParam || [];
//   const filtersFromSlug = decodeSlugToFilters(filtersParam);

//   // اعتبارسنجی اولیه: اگر segment ها هیچ فیلتر معتبری تولید نکردن و مسیر خالی نیست، می‌تونیم notFound بزنیم یا fallback بدیم
//   const hasAnyFilter =
//     !!filtersFromSlug.bedroomsSelected ||
//     !!filtersFromSlug.featureSelected ||
//     !!filtersFromSlug.propertyTypesSelected ||
//     !!filtersFromSlug.sortOption ||
//     (filtersFromSlug.currentPage && filtersFromSlug.currentPage > 1);

//   // اگر هم نخواستیم strict باشیم، می‌تونیم اجازه بدیم بیاد بدون فیلتر (صفحهٔ اصلی)
//   // اینجا فرض می‌کنیم اگر قطعات نامعتبر کامل باشن، notFound
//   // if (filtersParam.length > 0 && !hasAnyFilter) {
//   //   return notFound();
//   // }

//   const page = filtersFromSlug.currentPage || 1;

//   // آماده‌سازی فیلتر برای backend؛ فقط فیلترهای موجود را پاس می‌دهیم
//   const backendFilters: Record<string, any> = {};

//   if (filtersFromSlug.propertyTypesSelected) {
//     backendFilters.propertyTypesSelected = filtersFromSlug.propertyTypesSelected;
//   }
//   if (filtersFromSlug.featureSelected) {
//     backendFilters.featureSelected = filtersFromSlug.featureSelected;
//   }
//   if (filtersFromSlug.bedroomsSelected) {
//     backendFilters.bedroomsSelected = filtersFromSlug.bedroomsSelected;
//   }
//   if (filtersFromSlug.sortOption) {
//     backendFilters.sortOption = filtersFromSlug.sortOption;
//   }

//   // فراخوانی داده‌ها
//   const listings = (await fetchProperties(12, page, backendFilters, locale)) as ListingsType;

//   // اگر لازم باشه می‌تونی fallback دیگه هم اینجا بذاری (مثلاً اگر هیچ‌چیز نیومد)
//   return <ListingsPage listings={listings} initialSeoFilters={filtersFromSlug} />;
// }



import ListingsPage from "@/screens/listings";
import fetchProperties from "@/helpers/api/property/properties";
import { ListingsType } from "@/types/Property";
import {createGenerateMetadata} from "@/hooks/createGeneratePagesMetadata"

type SearchParams = {
  page?: string;
  type?: string;
  feature?: string;
  location?: string;
};

type Props = {
  params: { locale: string };
  searchParams: SearchParams;
  filtersParam: string[]
};

export const generateMetadata = createGenerateMetadata("properties-for-sale-in-turkey");


export default async function Listings({ params, searchParams, filtersParam }: Props) {
  const page = parseInt(searchParams.page || "1", 10);
  const { locale } = params;
  const filters: Record<string, string[]> = {};

  if (searchParams.type && searchParams.type!=='all') {
    filters.propertyTypesSelected = [searchParams.type];
  }

  if (searchParams.feature && searchParams.feature!=='all') {
    filters.featureSelected = [searchParams.feature];
  }

  if (searchParams.location && searchParams.location!=='all') {
    filters.locationsSelected = [searchParams.location];
  }

  const listings = await fetchProperties(12, page, filters, locale) as ListingsType;

  return <ListingsPage listings={listings} />;
}
