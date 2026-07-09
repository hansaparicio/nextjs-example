import type { Accommodation } from '../types';

export const categories = ['Todos', 'Playa', 'Mansiones', 'City'] as const;

export const accommodations: Accommodation[] = [
  {
    id: '1',
    title: 'Suite frente al mar',
    location: 'Tulum, México',
    category: 'Playa',
    price: 180,
    rating: 4.9,
    reviewCount: 120,
    description: 'Terraza amplia y ambiente tranquilo con piscina privada.',
    image: 'Playa',
    images: ['Vista al mar', 'Terraza privada', 'Piscina al atardecer'],
    host: {
      name: 'Sofía',
      yearsHosting: 5,
    },
    amenities: [
      { icon: '🛏️', label: '2 camas' },
      { icon: '🏖️', label: 'Acceso a playa' },
      { icon: '📶', label: 'Wi-Fi incluido' },
    ],
  },
  {
    id: '2',
    title: 'Casa moderna en la ciudad',
    location: 'Ciudad de México',
    category: 'City',
    price: 140,
    rating: 4.7,
    reviewCount: 98,
    description: 'Diseño contemporáneo y ubicación céntrica para viajeros urbanos.',
    image: 'City',
    images: ['Sala luminosa', 'Cocina equipada', 'Habitación principal'],
    host: {
      name: 'Julián',
      yearsHosting: 3,
    },
    amenities: [
      { icon: '🚇', label: 'Metro cerca' },
      { icon: '🥐', label: 'Cocina equipada' },
      { icon: '📺', label: 'Smart TV' },
    ],
  },
  {
    id: '3',
    title: 'Mansión con jardín',
    location: 'Puebla, México',
    category: 'Mansiones',
    price: 260,
    rating: 4.8,
    reviewCount: 64,
    description: 'Amplios espacios, piscina y estacionamiento privado.',
    image: 'Mansión',
    images: ['Jardín', 'Sala de estar', 'Piscina privada'],
    host: {
      name: 'Mariana',
      yearsHosting: 7,
    },
    amenities: [
      { icon: '🏊', label: 'Piscina' },
      { icon: '🚗', label: 'Estacionamiento' },
      { icon: '🧺', label: 'Lavadora' },
    ],
  },
  {
    id: '4',
    title: 'Loft minimalista',
    location: 'Guadalajara, México',
    category: 'City',
    price: 120,
    rating: 4.5,
    reviewCount: 42,
    description: 'Espacio acogedor con vista panorámica y diseño limpio.',
    image: 'Loft',
    images: ['Loft moderno', 'Espacio abierto', 'Cocina minimalista'],
    host: {
      name: 'Diego',
      yearsHosting: 2,
    },
    amenities: [
      { icon: '☕', label: 'Cafetera' },
      { icon: '🖥️', label: 'Espacio de trabajo' },
      { icon: '🧑‍🍳', label: 'Cocina completa' },
    ],
  },
];
