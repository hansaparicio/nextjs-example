import type { Amenity } from '../types';

interface AmenitiesGridProps {
  amenities: Amenity[];
}

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <div key={amenity.label} className="flex items-center gap-3 rounded-3xl border border-slate-100 bg-slate-50 p-3">
          <span className="text-xl">{amenity.icon}</span>
          <span className="text-sm font-medium text-slate-700">{amenity.label}</span>
        </div>
      ))}
    </section>
  );
}
