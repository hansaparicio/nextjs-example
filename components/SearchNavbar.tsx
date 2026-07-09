'use client';

import type { ChangeEvent } from 'react';
import Link from 'next/link';

interface SearchNavbarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchNavbar({ value, onChange }: SearchNavbarProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <label className="sr-only" htmlFor="search-input">
        Buscar alojamiento
      </label>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        className="w-full rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
        placeholder="Buscar ubicación, precio o categoría"
      />
      <Link
        href="/catalog"
        className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Ir a catálogo
      </Link>
    </div>
  );
}
