'use client';

import { useEffect, useState } from 'react';
import type { Accommodation } from '@/types';
import RoomDetailView from './RoomDetailView';

interface RoomShellProps {
  accommodation: Accommodation;
}

export default function RoomShell({ accommodation }: RoomShellProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Detalle de alojamiento</h1>
      </div>
      {loading ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="h-80 animate-pulse rounded-3xl bg-slate-200" />
          <div className="space-y-4">
            <div className="h-12 animate-pulse rounded-3xl bg-slate-200" />
            <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
          </div>
        </div>
      ) : (
        <RoomDetailView accommodation={accommodation} />
      )}
    </main>
  );
}
