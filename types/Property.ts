export type PropertyRawType = {
  id: number;
  images: string[];
  title: string;
  price: number;
  description: string;
  category: string;
  location: string;
  status: string;
  latitude: number;
  longitude: number;
  url: string;
  special_features: {title: string}[];
  locationID: number;
  min_price: number;
  max_price: number;
  created_at: string;
  features: {
    id: number;
    icon: string;
    name: string;
    value: string | number;
  }[];
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