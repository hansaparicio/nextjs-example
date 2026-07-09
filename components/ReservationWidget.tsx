'use client';

import { useState } from 'react';

interface ReservationWidgetProps {
  price: number;
}

export default function ReservationWidget({ price }: ReservationWidgetProps) {
  const [guests, setGuests] = useState(1);

  const increment = () => setGuests((current) => Math.min(current + 1, 8));
  const decrement = () => setGuests((current) => Math.max(current - 1, 1));

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Precio por noche</p>
          <p className="text-2xl font-semibold text-slate-900">${price}</p>
        </div>
        <div className="rounded-3xl bg-slate-100 px-3 py-2 text-sm text-slate-700">Disponible</div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-sm text-slate-600">Huéspedes</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={decrement}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700"
            >
              −
            </button>
            <span className="text-lg font-semibold text-slate-900">{guests}</span>
            <button
              type="button"
              onClick={increment}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700"
            >
              +
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500">Máximo 8 huéspedes. Mínimo 1 huésped.</p>
        </div>
        <button className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Reservar ahora
        </button>
      </div>
    </aside>
  );
}
