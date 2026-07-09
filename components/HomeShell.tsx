'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { accommodations, categories } from '@/data/accommodations';
import AccommodationCard from './AccommodationCard';
import CategoryFilters from './CategoryFilters';
import SearchNavbar from './SearchNavbar';

export default function HomeShell() {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredAccommodations = accommodations.filter((item) => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    const matchesSearch = [item.title, item.location, item.category].some((value) =>
      value.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Bienvenido</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Descubre tu próximo alojamiento</h1>
          </div>
          <Link
            href="/catalog"
            className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Ver catálogo completo
          </Link>
        </div>
        <SearchNavbar value={searchValue} onChange={setSearchValue} />
        <CategoryFilters categories={categories} active={activeCategory} onSelect={setActiveCategory} />
      </header>

      <section className="space-y-4 pt-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Alojamientos destacados</h2>
            <p className="text-sm text-slate-600">Explora opciones con disponibilidad inmediata.</p>
          </div>
          <p className="text-sm text-slate-500">{filteredAccommodations.length} opciones disponibles</p>
        </div>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-64 animate-pulse rounded-3xl bg-slate-200" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAccommodations.map((accommodation) => (
              <AccommodationCard key={accommodation.id} accommodation={accommodation} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
