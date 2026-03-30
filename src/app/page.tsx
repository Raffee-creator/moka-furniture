import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeaturedProducts from '@/components/FeaturedProducts';
import ShopByRoom from '@/components/ShopByRoom';

export default function Home() {
  return (
    <div className="bg-[#F5EBE0]">
      <Hero />
      <Marquee />
      <div className="mt-10">
        <FeaturedProducts />
      </div>
      <ShopByRoom />
      
      {/* Newsletter Section */}
      <section className="bg-[#2D2424] py-20 text-center">
        <h2 className="text-[#F5EBE0] text-3xl font-bold tracking-tighter mb-4 italic">Join the Moka Circle</h2>
        <p className="text-[#F5EBE0]/60 text-sm mb-8 tracking-wide">Get early access to new collections and interior tips.</p>
        <div className="max-w-md mx-auto flex px-6">
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-transparent border-b border-[#F5EBE0]/20 text-[#F5EBE0] w-full py-2 outline-none focus:border-[#B68D40] placeholder:text-[#F5EBE0]/30" 
          />
          <button className="text-[#B68D40] text-xs uppercase font-bold tracking-widest ml-4">Subscribe</button>
        </div>
      </section>
    </div>
  );
}