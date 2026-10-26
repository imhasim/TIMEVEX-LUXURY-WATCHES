import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  qty: number;
};

interface CartState {
  items: CartItem[];
  couponCode: string | null;
  discountPercentage: number;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getShippingAmount: () => number;
  getTotal: () => number;
  getTotalItemsCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      discountPercentage: 0,

      addItem: (product, qty = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, qty: item.qty + qty }
                  : item
              ),
            };
          }
          return { items: [...state.items, { product, qty }] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQty: (productId, qty) => {
        if (qty <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, qty } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], couponCode: null, discountPercentage: 0 });
      },

      applyCoupon: (code: string) => {
        const cleaned = code.trim().toUpperCase();
        if (cleaned === "TIME10") {
          set({ couponCode: "TIME10", discountPercentage: 10 });
          return { success: true, message: "Coupon 'TIME10' applied! 10% discount added." };
        } else if (cleaned === "WELCOME5") {
          set({ couponCode: "WELCOME5", discountPercentage: 5 });
          return { success: true, message: "Coupon 'WELCOME5' applied! 5% discount added." };
        } else if (cleaned === "LUXURY20") {
          const sub = get().getSubtotal();
          if (sub < 5000) {
            return { success: false, message: "Coupon 'LUXURY20' requires a minimum order of ₹5,000." };
          }
          set({ couponCode: "LUXURY20", discountPercentage: 20 });
          return { success: true, message: "VIP Coupon 'LUXURY20' applied! 20% discount added." };
        }
        return { success: false, message: "Invalid coupon code. Try TIME10 or WELCOME5." };
      },

      removeCoupon: () => {
        set({ couponCode: null, discountPercentage: 0 });
      },

      getSubtotal: () => {
        return get().items.reduce(
          (acc, item) => acc + item.product.price * item.qty,
          0
        );
      },

      getDiscountAmount: () => {
        const sub = get().getSubtotal();
        const percent = get().discountPercentage;
        return Math.round((sub * percent) / 100);
      },

      getShippingAmount: () => {
        const sub = get().getSubtotal();
        if (sub === 0) return 0;
        return sub >= 999 ? 0 : 99;
      },

      getTotal: () => {
        const sub = get().getSubtotal();
        if (sub === 0) return 0;
        const discount = get().getDiscountAmount();
        const shipping = get().getShippingAmount();
        return Math.max(0, sub - discount + shipping);
      },

      getTotalItemsCount: () => {
        return get().items.reduce((acc, item) => acc + item.qty, 0);
      },
    }),
    {
      name: "timevex-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
