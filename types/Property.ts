// export type PropertyRawType = {
//   id: number;
//   images: string[];
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   location: string;
//   status: string;
//   latitude: number;
//   longitude: number;
//   url: string;
//   special_features: {title: string}[];
//   locationID: number;
//   min_price: number;
//   max_price: number;
//   created_at: string;
//   features: {
//     id: number;
//     icon: string;
//     name: string;
//     value: string | number;
//   }[];
// };

export type PropertyRawType = {
  id: number;
  title: string;
  slug: string;
  url: string;
  content: string | null;
  description: string | null;
  created_at: string;
  images: [string | null, string | null]; // [url, alt]
  location: string;
  locationID: number;
  types: {
   id: number;
    title: string,
    [key: string]: any; 
  }[];
  special_features: {
   id: number;
    title: string,
    [key: string]: any; 
  }[];
  category: string | null;
  status: "sold_out" | "available";
  min_price: number;
  max_price: number;
  latitude: number | null;
  longitude: number| null;
  features: {
    id: number;
    icon: string;
    name: string;
    value: string | number;
    full_name?: string
  }[];
  agent:{
    image:string,
    name: string | null,
    email: string | null,
    phone: string | null,
  },
  key_features_and_highlights: string | null;
  investment_and_payment: string | null;
  amenities_and_services: string | null;
  property_description: string | null;
  location_and_lifestyle: string | null;
  legal_and_citizenship: string | null;
  virtual_tour_video: string | null;
  floor_plans_and_gallery: string | null;
  contact_and_request_info: string | null;
  meta_description: string | null;
  meta_title: string | null;
  meta_index: "index" | "noindex" | null;
  meta_follow: "follow" | "nofollow" | null;
  [key: string]: any;
};


export type PropertyType = {
  item: PropertyRawType;
  className?: string
};


export type ListingsType = {
  properties: PropertyRawType[];
  pagination: {
    last_page: number
  }
  special_features: string[]
  type_of_properties: string[]
  locations: string[]
}