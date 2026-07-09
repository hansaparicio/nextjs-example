'use client';

import { useEffect, useMemo, useState } from 'react';
import { accommodations, categories } from '@/data/accommodations';
import AccommodationCard from './AccommodationCard';
import CategoryFilters from './CategoryFilters';

export default function CatalogShell() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const results = useMemo(() => {
    const filtered = accommodations.filter((item) =>
      activeCategory === 'Todos' ? true : item.category === activeCategory,
    );

    return filtered.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  }, [activeCategory, sortOrder]);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Resultados de búsqueda</h1>
          <p className="mt-2 text-sm text-slate-600">Ordena y filtra según tus preferencias.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <CategoryFilters categories={categories} active={activeCategory} onSelect={setActiveCategory} />
          <div className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="text-sm text-slate-600">Ordenar precio</span>
            <button
              type="button"
              onClick={() => setSortOrder('asc')}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                sortOrder === 'asc' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700'
              }`}
            >
              Ascendente
            </button>
            <button
              type="button"
              onClick={() => setSortOrder('desc')}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                sortOrder === 'desc' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700'
              }`}
            >
              Descendente
            </button>
          </div>
        </div>
      </header>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-6 text-slate-700 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Mapa</p>
            <div className="mt-4 h-72 rounded-3xl bg-slate-300" />
          </div>

          {loading ? (
            <div className="grid gap-4 md:grid-cols-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-64 animate-pulse rounded-3xl bg-slate-200" />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {results.map((accommodation) => (
                <AccommodationCard key={accommodation.id} accommodation={accommodation} />
              ))}
            </div>
          )}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Resumen</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {results.length} alojamientos disponibles para la categoría seleccionada. Ajusta la ordenación para comparar precios.
          </p>
        </div>
      </section>
    </main>
  );
}
