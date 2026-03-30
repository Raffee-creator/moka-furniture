import Navbar from '@/components/Navbar';
import "./globals.css";
import { Toaster } from 'react-hot-toast'; // Install this: npm install react-hot-toast

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5EBE0] text-[#2D2424] selection:bg-[#B68D40] selection:text-white">
        {/* Toast notifications for "Added to Cart" feedback */}
        <Toaster position="bottom-right" />
        
        <Navbar />
        
        {/* AnimatePresence or a simple motion div can go here later */}
        <main className="min-h-screen pt-20"> 
          {children}
        </main>

        {/* Let's add a simple footer placeholder to make it look like a real app */}
        <footer className="py-12 border-t border-[#2D2424]/5 text-center text-[10px] uppercase tracking-widest opacity-50">
          © 2026 Moka Furniture. Handcrafted for the modern home.
        </footer>
      </body>
    </html>
  );
}