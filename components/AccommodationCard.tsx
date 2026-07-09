'use client';

import Link from 'next/link';
import type { Accommodation } from '../types';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export default function AccommodationCard({ accommodation }: AccommodationCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5">
      <div className="flex h-48 items-end bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 p-4 text-white">
        <div className="rounded-full bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-100">
          {accommodation.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-sm text-slate-500">{accommodation.location}</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">{accommodation.title}</h2>
        </div>
        <p className="text-sm leading-6 text-slate-600">{accommodation.description}</p>
        <div className="mt-auto flex items-center justify-between text-sm text-slate-700">
          <span className="font-semibold text-slate-900">${accommodation.price}/noche</span>
          <span>{accommodation.rating} ★ ({accommodation.reviewCount})</span>
        </div>
        <Link
          href={`/room/${accommodation.id}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
