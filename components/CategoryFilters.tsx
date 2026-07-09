'use client';

interface CategoryFiltersProps {
  categories: readonly string[];
  active: string;
  onSelect: (value: string) => void;
}

export default function CategoryFilters({ categories, active, onSelect }: CategoryFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-3">
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            active === category
              ? 'border-slate-900 bg-slate-900 text-white'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
