'use client';

interface RoomGalleryProps {
  images: string[];
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function RoomGallery({ images, activeIndex, onPrevious, onNext }: RoomGalleryProps) {
  return (
    <section className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-slate-900">
        <div className="flex h-72 items-center justify-center bg-slate-300 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
          {images[activeIndex]}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrevious}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}
