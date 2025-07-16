export type PropertyType = {
    item: {
      id: number;
      images: string[];
      title: string;
      price: number;
      description: string;
      category: string;
      location: string;
      status: string;
      features: {
        id: number;
        icon: string;
        name: string;
        value: string | number;
      }[];
    };
    className?: string
  };