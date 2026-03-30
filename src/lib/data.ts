export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Harlow Oak Armchair',
    category: 'Living Room',
    price: 850,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: '2',
    name: 'Moka Minimalist Side Table',
    category: 'Bedroom',
    price: 320,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Suede Floor Pouf',
    category: 'Accessories',
    price: 180,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Linear Pendant Light',
    category: 'Lighting',
    price: 450,
    image: 'https://images.unsplash.com/photo-1513506494265-99b1591461f8?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
];