import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = Array.from({ length: 25 }, (_, i) => ({
    id: i.toString(),
    title: `Luxury Residence ${i + 1}`,
    type: "Apartment",
    location: "Şişli, İstanbul",
    image: "/images/property.jpg",
    lat: 40.7 + Math.random() * 0.2,
    lng: 29 + Math.random() * 0.2,
    priceMin: 1000000 + i * 150000,
    priceMax: 2000000 + i * 200000,
    features: ["Balcony", "Smart Home", "Security", "Parking"].slice(0, (i % 4) + 1),
  }));

  res.status(200).json(properties);
}
