import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the Product type locally if not importing correctly
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  decrementItem: (id: string) => void; // New: reduce quantity by 1
  removeItem: (id: string) => void;    // Remove entire stack
  clearCart: () => void;
  totalItems: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      decrementItem: (id) => {
        const currentItems = get().items;
        const item = currentItems.find((i) => i.id === id);

        if (item && item.quantity > 1) {
          set({
            items: currentItems.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        } else {
          // If it's the last one, remove it
          set({ items: currentItems.filter((i) => i.id !== id) });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
    }),
    {
      name: 'moka-cart-storage', // unique name for localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);