# TimeVex: Product Requirements Document (PRD)

**Version:** 1.0
**Date:** 25 October 2026
**Type:** Frontend-only e-commerce website (backend nahi)

---

## 1. Overview

**TimeVex** ek premium dark-themed watch store website hai jahan Men aur Women dono ki watches ₹300 se ₹10,000 ki range me milti hain. Website ka UI/UX diye gaye reference design par based hai: kala background, gold accent, elegant serif headings aur smooth animations.

Sab kuch frontend me hoga. Products ek local data file se aayenge, aur cart, wishlist aur orders browser ke `localStorage` me save honge.

## 2. Goals

1. Reference design jaisi premium, clean aur fast website banana
2. Ek real e-commerce jaisa experience dena: browse, filter, cart, checkout (dummy)
3. Architecture simple rakhna, taaki build aur maintain karna aasan ho
4. Mobile aur desktop dono par perfect chalna

## 3. Non-Goals (abhi nahi banega)

- Real backend, database ya API
- Real payment gateway
- User login / signup
- Admin panel
- Real order tracking

## 4. Target Users

- Budget aur premium dono tarah ke watch buyers (₹300 se ₹10,000)
- Men aur Women dono
- Mostly mobile users, isliye mobile-first design

## 5. Tech Stack

| Cheez | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| State | Zustand (persist middleware) |
| Forms | React Hook Form + Zod |
| Icons | lucide-react |
| Toasts | sonner |
| Images | `next/image` (Unsplash ya local `/public`) |
| Fonts | `next/font`: Cormorant Garamond, Inter, JetBrains Mono |
| Deploy | Vercel |

## 6. Design System

### Colors
| Naam | Value |
|---|---|
| Background | `#0B0B0D` |
| Surface / Card | `#141416` |
| Border | `rgba(255,255,255,0.08)` |
| Gold accent | `#C9A66B` |
| Text | `#F5F1E8` |
| Muted text | `#8A8A8F` |

### Typography
- **Headings:** Cormorant Garamond (serif). Ek word italic + gold me, jaise "*measured* in centuries"
- **Body:** Inter
- **Labels:** JetBrains Mono, uppercase, wide letter-spacing (jaise `REF. TV-1024`, `THE COLLECTION`)

### Components style
- Cards: `rounded-2xl`, subtle border, hover par halka zoom + gold glow
- Primary button: white pill; Secondary: outline pill
- Section spacing bada rakhna (premium feel)
- Animation: scroll par fade-up, marquee strip, smooth hover

## 7. Pages aur Requirements

### 7.1 Home (`/`)

| # | Section | Detail |
|---|---|---|
| 1 | Navbar | Logo, Shop, Men, Women, About, Contact; search, wishlist, cart icon (count badge). Mobile par hamburger menu |
| 2 | Hero | Bada heading, description, "Explore the Collection" button, 3 stats, featured watch card with price |
| 3 | Marquee strip | Free Shipping, 1 Year Warranty, Easy Returns, Water Resistant, COD Available |
| 4 | Featured Collection | 3 bade product cards (naam, ref no., price) |
| 5 | Find your style | Categories: Men, Women, Analog, Digital, Smart, Luxury |
| 6 | Most Loved | Top 4 ranked list (01-04) with price |
| 7 | Feature banner | Ek watch ka close-up image + short text |
| 8 | Service perks | 4 boxes: Warranty, 7-day Return, Secure Payment, Genuine Product |
| 9 | Reviews | 3 customer testimonials with star rating |
| 10 | Newsletter | Email input + Subscribe (validation + success toast, save nahi hoga) |
| 11 | Final CTA | "Shop the collection" + "Contact us" |
| 12 | Footer | Links (Shop, Company, Support), social icons, copyright |

### 7.2 Shop (`/shop`)

- Product grid (desktop 3-4 columns, mobile 2 columns)
- **Filters:** Gender (Men / Women / Unisex), Price slider (₹300-₹10,000), Category, Strap type, Brand
- **Sort:** Price low→high, high→low, Newest, Popular
- Live search bar
- Filters URL query params me save hon (`?gender=men&max=5000`), taaki link share ho sake
- "Load more" button
- Empty state jab koi product na mile
- Mobile par filters bottom drawer me

### 7.3 Product Detail (`/product/[slug]`)

- Image gallery (main image + thumbnails)
- Naam, brand, price, old price (agar discount), rating
- Description aur specs table (dial size, strap, water resistance, movement, warranty)
- Quantity selector
- Buttons: Add to Cart, Buy Now, Wishlist
- Related products section

### 7.4 Cart (`/cart`)

- Items list, quantity +/−, remove
- Coupon box (code: `TIME10` = 10% off, `WELCOME5` = 5% off)
- Subtotal, discount, shipping, total
- Empty cart state
- "Proceed to Checkout" button

### 7.5 Checkout (`/checkout`)

- Address form: Name, Phone, Email, Address, City, State, Pincode (Zod validation)
- Payment options (sirf UI): COD, UPI, Card
- Order summary sidebar
- "Place Order" par fake order ID banega aur cart khali ho jayega

### 7.6 Order Success (`/order-success`)

- Order ID, items summary, total, estimated delivery date, "Continue Shopping" button

### 7.7 Wishlist (`/wishlist`)

- Saved products grid, remove aur "Move to cart"

### 7.8 Baaki pages

- **About** (`/about`): brand story, values
- **Contact** (`/contact`): form UI (validation + success toast)
- **404:** custom not-found page

## 8. Functional Requirements

| ID | Requirement |
|---|---|
| F1 | User products ko gender, price, category, brand se filter kar sake |
| F2 | User products ko sort aur search kar sake |
| F3 | User cart me add, quantity change aur remove kar sake |
| F4 | Cart aur wishlist refresh ke baad bhi bache rahein (localStorage) |
| F5 | Coupon code apply hone par total update ho |
| F6 | Checkout form me galat input par error message dikhe |
| F7 | Order place hone par success page aur order ID mile |
| F8 | Har product ka apna URL aur SEO title ho |
| F9 | Add to cart / wishlist par toast notification aaye |
| F10 | Poori site mobile, tablet aur desktop par sahi chale |

## 9. Data Model

```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  gender: "men" | "women" | "unisex";
  category: "analog" | "digital" | "smart" | "chronograph" | "luxury";
  price: number;          // 300 - 10000
  oldPrice?: number;
  images: string[];
  rating: number;
  reviews: number;
  strap: string;
  specs: { label: string; value: string }[];
  description: string;
  inStock: boolean;
  tags?: ("new" | "bestseller")[];
};

type CartItem = { productId: string; qty: number };
```

**Starting data:** 24-30 products, price in 4 bands me:
- ₹300 - ₹1,000 (budget)
- ₹1,000 - ₹3,000
- ₹3,000 - ₹6,000
- ₹6,000 - ₹10,000 (premium)

Men aur Women dono me barabar products.

## 10. Folder Structure

```
timevex/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                 # Home
│  ├─ shop/page.tsx
│  ├─ product/[slug]/page.tsx
│  ├─ cart/page.tsx
│  ├─ checkout/page.tsx
│  ├─ order-success/page.tsx
│  ├─ wishlist/page.tsx
│  ├─ about/page.tsx
│  ├─ contact/page.tsx
│  └─ not-found.tsx
├─ components/
│  ├─ layout/    (Navbar, Footer, MobileMenu)
│  ├─ home/      (Hero, Marquee, Featured, Categories, MostLoved, Perks, Reviews, Newsletter)
│  ├─ shop/      (ProductCard, FilterPanel, SortDropdown, SearchBar)
│  ├─ product/   (Gallery, SpecsTable, QtySelector)
│  └─ ui/        (Button, Badge, Input, Drawer)
├─ data/
│  └─ products.ts
├─ store/
│  ├─ cartStore.ts
│  └─ wishlistStore.ts
├─ lib/
│  ├─ utils.ts
│  └─ validators.ts            # Zod schemas
├─ public/images/
└─ styles/globals.css
```

## 11. Non-Functional Requirements

- **Performance:** Lighthouse 90+; images `next/image` se optimize
- **Responsive:** 360px se 1440px+ tak
- **Accessibility:** alt text, keyboard navigation, sahi contrast
- **SEO:** metadata, Open Graph, har page ka title
- **Browser support:** latest Chrome, Safari, Firefox, Edge

## 12. Development Phases

| Phase | Kaam | Time |
|---|---|---|
| 1 | Project setup, Tailwind, fonts, design tokens, layout (Navbar + Footer) | 0.5 din |
| 2 | `products.ts` data + ProductCard | 0.5 din |
| 3 | Home page ke saare sections + animations | 1.5 din |
| 4 | Shop page: filters, sort, search | 1 din |
| 5 | Product detail page | 1 din |
| 6 | Cart + Wishlist (Zustand) + coupons | 1 din |
| 7 | Checkout + Order success | 1 din |
| 8 | About, Contact, 404 | 0.5 din |
| 9 | Responsive polish, SEO, testing | 1 din |
| 10 | Vercel deploy | 0.25 din |

## 13. Acceptance Checklist

- [ ] Design reference jaisa dark premium look
- [ ] Sab pages mobile par sahi dikhte hain
- [ ] 24+ products, Men aur Women dono
- [ ] Har product ke saath price dikhta hai (₹300-₹10,000)
- [ ] Filters, sort aur search kaam karte hain
- [ ] Cart aur wishlist refresh ke baad bhi bache rehte hain
- [ ] Coupon aur checkout flow poora chalta hai
- [ ] Koi console error ya broken image nahi
- [ ] Vercel par live

## 14. Future Scope (v2)

- Real backend + database
- Login / signup aur order history
- Real payment (Razorpay)
- Admin panel se product management
- Product reviews dene ki facility