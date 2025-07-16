import { Property } from "../types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-xl shadow-xl w-96 p-4">
      <img src={property.image} className="rounded-lg mb-3" alt={property.title} />
      <div className="text-xs text-orange-600 font-bold mb-1">{property.type}</div>
      <div className="font-semibold text-lg">{property.title}</div>
      <div className="text-sm text-gray-500">{property.location}</div>

      <div className="my-2 flex flex-wrap gap-2">
        {property.features.map((f) => (
          <span key={f} className="bg-gray-200 text-xs px-2 py-1 rounded-full">{f}</span>
        ))}
      </div>

      <div className="font-semibold">
        {property.priceMin.toLocaleString()}₺ - {property.priceMax.toLocaleString()}₺
      </div>
    </div>
  );
}