'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductProps) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id, name, price, quantity: 1 }));
    alert(`${name} added to cart!`); // Temporary feedback
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <button 
          onClick={handleAdd}
          className="absolute bottom-4 left-4 right-4 bg-white py-3 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl hover:bg-moka-slate hover:text-white"
        >
          Add to Cart
        </button>
      </div>
      <h3 className="text-sm font-medium text-moka-slate uppercase tracking-tight">{name}</h3>
      <p className="text-sm text-slate-500 mt-1">${(price / 100).toFixed(2)}</p>
    </div>
  );
}