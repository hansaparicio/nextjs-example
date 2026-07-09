'use client';

import { useState } from 'react';
import type { Accommodation } from '@/types';
import RoomGallery from './RoomGallery';
import HostInfo from './HostInfo';
import AmenitiesGrid from './AmenitiesGrid';
import ReservationWidget from './ReservationWidget';

interface RoomDetailViewProps {
  accommodation: Accommodation;
}

export default function RoomDetailView({ accommodation }: RoomDetailViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => setActiveIndex((current) => (current === 0 ? accommodation.images.length - 1 : current - 1));
  const handleNext = () => setActiveIndex((current) => (current === accommodation.images.length - 1 ? 0 : current + 1));

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">{accommodation.title}</h1>
        <p className="text-sm text-slate-600">{accommodation.location}</p>
        <RoomGallery
          images={accommodation.images}
          activeIndex={activeIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Descripción</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{accommodation.description}</p>
          </section>
          <HostInfo host={accommodation.host} />
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Datos rápidos</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Precio</p>
                <p>${accommodation.price} por noche</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Valoración</p>
                <p>{accommodation.rating} ★ ({accommodation.reviewCount} reseñas)</p>
              </div>
            </div>
          </section>
          <AmenitiesGrid amenities={accommodation.amenities} />
        </div>
        <ReservationWidget price={accommodation.price} />
      </div>
    </div>
  );
}
