import { notFound } from 'next/navigation';
import { accommodations } from '@/data/accommodations';
import RoomShell from '@/components/RoomShell';

interface RoomPageProps {
  params: {
    id: string;
  };
}

export default function RoomPage({ params }: RoomPageProps) {
  const accommodation = accommodations.find((item) => item.id === params.id);

  if (!accommodation) {
    notFound();
  }

  return <RoomShell accommodation={accommodation} />;
}
