export interface Host {
  name: string;
  yearsHosting: number;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Accommodation {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  images: string[];
  host: Host;
  amenities: Amenity[];
}
