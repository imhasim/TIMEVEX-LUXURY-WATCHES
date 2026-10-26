import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/data/products";

interface WishlistState {
  items: Product[];
  toggleWishlist: (product: Product) => boolean; // returns true if added, false if removed
  isInWishlist: (productId: string) => boolean;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleWishlist: (product) => {
        const current = get().items;
        const exists = current.some((item) => item.id === product.id);
        if (exists) {
          set({ items: current.filter((item) => item.id !== product.id) });
          return false;
        } else {
          set({ items: [...current, product] });
          return true;
        }
      },

      isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: "timevex-wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
