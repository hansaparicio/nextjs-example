import type { Host } from '../types';

interface HostInfoProps {
  host: Host;
}

export default function HostInfo({ host }: HostInfoProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Información del anfitrión</h3>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-xl text-slate-700">
          {host.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{host.name}</p>
          <p className="text-sm text-slate-600">{host.yearsHosting} años como anfitrión</p>
        </div>
      </div>
    </section>
  );
}
