import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = [
    { id: '1', name: 'Oatmeal Lounge Chair', price: 85000, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000' },
    { id: '2', name: 'Minimalist Oak Desk', price: 120000, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000' },
    { id: '3', name: 'Ceramic Side Table', price: 34000, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000' },
  ];

  return (
    <main className="min-h-screen">
      {/* (Keep your Nav and Hero sections here...) */}
      
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-serif">The Essentials</h2>
          <a href="#" className="text-xs uppercase border-b border-moka-slate pb-1">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}