export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  gender: "men" | "women";
  category: "luxury" | "chronograph" | "analog" | "smart" | "digital";
  price: number;
  oldPrice?: number;
  images: string[];
  imageAlt: string;
  rating: number;
  reviews: number;
  strap: "Leather" | "Steel" | "Mesh" | "Silicone" | "Nylon";
  specs: { label: string; value: string }[];
  description: string;
  inStock: boolean;
  tags?: ("new" | "bestseller")[];
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    "id": "tv-m01",
    "slug": "timevex-sovereign-gold-automatic",
    "name": "Sovereign Gold Automatic",
    "brand": "TimeVex Luxury",
    "gender": "men",
    "category": "luxury",
    "strap": "Leather",
    "price": 8999,
    "oldPrice": 12999,
    "images": [
      "https://images.unsplash.com/photo-1518131672697-613becd4fab5?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's luxury gold skeleton automatic watch with brown leather strap",
    "rating": 4.9,
    "reviews": 168,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "Automatic Skeleton Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Gold / Open Heart"
      }
    ],
    "description": "Exquisite skeleton tourbillon with exposed balance wheel, 18K gold-plated casing, and hand-stitched alligator grain leather strap.",
    "inStock": true,
    "tags": [
      "bestseller"
    ],
    "featured": true
  },
  {
    "id": "tv-m02",
    "slug": "timevex-imperial-steel-tourbillon",
    "name": "Imperial Steel Tourbillon",
    "brand": "TimeVex Luxury",
    "gender": "men",
    "category": "luxury",
    "strap": "Steel",
    "price": 9499,
    "oldPrice": 14499,
    "images": [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's luxury black dial automatic watch with stainless steel bracelet",
    "rating": 4.9,
    "reviews": 194,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "43 mm"
      },
      {
        "label": "Movement",
        "value": "Automatic Self-Winding"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Onyx Black"
      }
    ],
    "description": "Surgical 316L solid stainless steel with sapphire crystal and high-beat automatic mechanical movement.",
    "inStock": true,
    "tags": [
      "bestseller"
    ],
    "featured": true
  },
  {
    "id": "tv-m03",
    "slug": "timevex-aristocrat-milanese-skeleton",
    "name": "Aristocrat Milanese Skeleton",
    "brand": "TimeVex Luxury",
    "gender": "men",
    "category": "luxury",
    "strap": "Mesh",
    "price": 8299,
    "oldPrice": 11999,
    "images": [
      "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's luxury open-heart skeleton watch with Milanese mesh strap",
    "rating": 4.8,
    "reviews": 112,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "41 mm"
      },
      {
        "label": "Movement",
        "value": "Mechanical Automatic"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Silver Skeleton"
      }
    ],
    "description": "Sleek open-heart exhibition dial paired with an ultra-fine stainless steel Milanese magnetic mesh strap.",
    "inStock": true,
    "featured": true
  },
  {
    "id": "tv-m04",
    "slug": "timevex-monaco-rose-gold-sport",
    "name": "Monaco Rose Gold Sport",
    "brand": "TimeVex Luxury",
    "gender": "men",
    "category": "luxury",
    "strap": "Silicone",
    "price": 7699,
    "oldPrice": 9999,
    "images": [
      "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's luxury gold sports watch with dark silicone bezel",
    "rating": 4.7,
    "reviews": 86,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "44 mm"
      },
      {
        "label": "Movement",
        "value": "Swiss Quartz Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Rose Gold / Sunray"
      }
    ],
    "description": "Rose gold bezel case with integrated vulcanized black silicone sports strap and scratch-resistant sapphire crystal.",
    "inStock": true,
    "tags": [
      "new"
    ]
  },
  {
    "id": "tv-m05",
    "slug": "timevex-royal-commando-luxury",
    "name": "Royal Commando Luxury",
    "brand": "TimeVex Luxury",
    "gender": "men",
    "category": "luxury",
    "strap": "Nylon",
    "price": 6999,
    "oldPrice": 9499,
    "images": [
      "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's luxury tactical skeleton watch with woven nylon strap",
    "rating": 4.8,
    "reviews": 73,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "Japanese Mechanical Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Dark Emerald"
      }
    ],
    "description": "Polished luxury bronze finish case with a heavy-duty reinforced ballistic black nylon NATO strap.",
    "inStock": true
  },
  {
    "id": "tv-m06",
    "slug": "timevex-carrera-vintage-chrono",
    "name": "Carrera Vintage Chrono",
    "brand": "TimeVex Chrono",
    "gender": "men",
    "category": "chronograph",
    "strap": "Leather",
    "price": 3499,
    "oldPrice": 5499,
    "images": [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's black chronograph watch with sub-dials and genuine leather strap",
    "rating": 4.9,
    "reviews": 147,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "43 mm"
      },
      {
        "label": "Movement",
        "value": "Precision Chronograph Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Sunburst Brown"
      }
    ],
    "description": "Triple sub-dial chronograph stopwatch with date window and textured saddle tan calfskin leather.",
    "inStock": true
  },
  {
    "id": "tv-m07",
    "slug": "timevex-apex-speed-chronograph",
    "name": "Apex Speed Chronograph",
    "brand": "TimeVex Chrono",
    "gender": "men",
    "category": "chronograph",
    "strap": "Steel",
    "price": 4299,
    "oldPrice": 6499,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's stainless steel chronograph watch with triple sub-dials",
    "rating": 4.9,
    "reviews": 215,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "Split-Second Chrono Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Pure White"
      }
    ],
    "description": "Tachymeter bezel, high-precision split-second quartz chronograph calibre, and solid link steel bracelet.",
    "inStock": true,
    "tags": [
      "bestseller"
    ],
    "featured": true
  },
  {
    "id": "tv-m08",
    "slug": "timevex-stealth-shadow-chrono",
    "name": "Stealth Shadow Chrono",
    "brand": "TimeVex Chrono",
    "gender": "men",
    "category": "chronograph",
    "strap": "Mesh",
    "price": 3899,
    "oldPrice": 4999,
    "images": [
      "https://images.pexels.com/photos/11544157/pexels-photo-11544157.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's stealth black chronograph watch with fine steel mesh strap",
    "rating": 4.7,
    "reviews": 98,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "Japanese Chronograph Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Matte Black"
      }
    ],
    "description": "Matte gunmetal chronograph casing with dual sub-dials and breathable PVD black mesh strap.",
    "inStock": true
  },
  {
    "id": "tv-m09",
    "slug": "timevex-grand-prix-racing-chrono",
    "name": "Grand Prix Racing Chrono",
    "brand": "TimeVex Chrono",
    "gender": "men",
    "category": "chronograph",
    "strap": "Silicone",
    "price": 3199,
    "oldPrice": 4499,
    "images": [
      "https://images.unsplash.com/photo-1630262174975-38bf8d42745f?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's racing sports chronograph watch with durable silicone strap",
    "rating": 4.8,
    "reviews": 104,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "44 mm"
      },
      {
        "label": "Movement",
        "value": "High-Beat Quartz Chrono"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Carbon Black & Red"
      }
    ],
    "description": "Motorsport inspired red racing bezel with tyre-tread textured durable silicone strap.",
    "inStock": true,
    "tags": [
      "new"
    ]
  },
  {
    "id": "tv-m10",
    "slug": "timevex-aviator-pilot-chrono",
    "name": "Aviator Pilot Chrono",
    "brand": "TimeVex Chrono",
    "gender": "men",
    "category": "chronograph",
    "strap": "Nylon",
    "price": 2999,
    "oldPrice": 3799,
    "images": [
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's aviator pilot chronograph watch with military nylon strap",
    "rating": 4.7,
    "reviews": 64,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "Aviation Quartz Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Military Green"
      }
    ],
    "description": "Military pilot dual-chronograph with high contrast luminescent numerals and green NATO nylon band.",
    "inStock": true
  },
  {
    "id": "tv-m11",
    "slug": "timevex-heritage-slim-classic",
    "name": "Heritage Slim Classic",
    "brand": "TimeVex Classic",
    "gender": "men",
    "category": "analog",
    "strap": "Leather",
    "price": 2499,
    "oldPrice": 3499,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's classic minimalist analog dress watch with brown leather strap",
    "rating": 4.8,
    "reviews": 139,
    "specs": [
      {
        "label": "Category",
        "value": "Analog"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "40 mm"
      },
      {
        "label": "Movement",
        "value": "Japanese Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Cream Sunburst"
      }
    ],
    "description": "Ultra-slim 7mm profile analog dress watch with sunburst dial and genuine Italian leather strap.",
    "inStock": true
  },
  {
    "id": "tv-m12",
    "slug": "timevex-oceanic-navy-diver",
    "name": "Oceanic Navy Diver",
    "brand": "TimeVex Diver",
    "gender": "men",
    "category": "analog",
    "strap": "Steel",
    "price": 4499,
    "oldPrice": 5999,
    "images": [
      "https://images.unsplash.com/photo-1614703418052-d5b893d495bc?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's navy blue dial automatic diver watch with stainless steel bracelet",
    "rating": 4.9,
    "reviews": 178,
    "specs": [
      {
        "label": "Category",
        "value": "Analog"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "High-Torque Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "20 ATM (200m)"
      },
      {
        "label": "Dial Color",
        "value": "Deep Sea Navy"
      }
    ],
    "description": "Unidirectional ceramic rotating bezel, deep sunray navy dial, and solid oyster link steel band.",
    "inStock": true
  },
  {
    "id": "tv-m14",
    "slug": "timevex-aquasport-diver",
    "name": "AquaSport Diver",
    "brand": "TimeVex Diver",
    "gender": "men",
    "category": "analog",
    "strap": "Silicone",
    "price": 1999,
    "oldPrice": 2899,
    "images": [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's water-resistant sports diver watch with flexible silicone band",
    "rating": 4.6,
    "reviews": 67,
    "specs": [
      {
        "label": "Category",
        "value": "Analog"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "43 mm"
      },
      {
        "label": "Movement",
        "value": "Shockproof Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Matte Black"
      }
    ],
    "description": "100m water resistant sports analog watch with high-visibility indices and soft rubber silicone strap.",
    "inStock": true
  },
  {
    "id": "tv-m16",
    "slug": "timevex-chronosmart-hybrid",
    "name": "ChronoSmart Hybrid",
    "brand": "TimeVex Smart",
    "gender": "men",
    "category": "smart",
    "strap": "Leather",
    "price": 2899,
    "oldPrice": 4499,
    "images": [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's hybrid smartwatch with analog dial and genuine leather strap",
    "rating": 4.7,
    "reviews": 79,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "43 mm"
      },
      {
        "label": "Movement",
        "value": "Smart Micro-Processor"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Waterproof"
      },
      {
        "label": "Dial Color",
        "value": "Digital OLED Display"
      }
    ],
    "description": "Smart health tracking with hidden AMOLED display under physical hands, paired with leather strap.",
    "inStock": true
  },
  {
    "id": "tv-m17",
    "slug": "timevex-executive-smart-steel",
    "name": "Executive Smart Steel",
    "brand": "TimeVex Smart",
    "gender": "men",
    "category": "smart",
    "strap": "Steel",
    "price": 2999,
    "oldPrice": 3999,
    "images": [
      "https://images.pexels.com/photos/3809175/pexels-photo-3809175.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's executive smartwatch with metallic stainless steel link bracelet",
    "rating": 4.8,
    "reviews": 122,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "44 mm"
      },
      {
        "label": "Movement",
        "value": "Dual Core Smart Chip"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Waterproof"
      },
      {
        "label": "Dial Color",
        "value": "HD Touchscreen"
      }
    ],
    "description": "Bluetooth calling, heart rate monitor, notifications, and polished stainless steel link bracelet.",
    "inStock": true
  },
  {
    "id": "tv-m18",
    "slug": "timevex-vertex-amoled-mesh",
    "name": "Vertex AMOLED Mesh",
    "brand": "TimeVex Smart",
    "gender": "men",
    "category": "smart",
    "strap": "Mesh",
    "price": 2599,
    "oldPrice": 3499,
    "images": [
      "https://images.pexels.com/photos/18662969/pexels-photo-18662969.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's high-definition AMOLED smartwatch with magnetic mesh strap",
    "rating": 4.7,
    "reviews": 68,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "42 mm"
      },
      {
        "label": "Movement",
        "value": "AMOLED Digital Engine"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Waterproof"
      },
      {
        "label": "Dial Color",
        "value": "Always-On Display"
      }
    ],
    "description": "1.43-inch Always-on AMOLED touch display, SpO2 sensor, and magnetic Milanese mesh band.",
    "inStock": true
  },
  {
    "id": "tv-m19",
    "slug": "timevex-active-pro-pulse",
    "name": "Active Pro Pulse",
    "brand": "TimeVex Smart",
    "gender": "men",
    "category": "smart",
    "strap": "Silicone",
    "price": 2199,
    "oldPrice": 2899,
    "images": [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Men's fitness tracking smartwatch with heart rate monitor and black silicone strap",
    "rating": 4.8,
    "reviews": 141,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "44 mm"
      },
      {
        "label": "Movement",
        "value": "Fitness OS Telemetry"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Swimming Proof"
      },
      {
        "label": "Dial Color",
        "value": "Full Touch Color Display"
      }
    ],
    "description": "IP68 waterproof multisport fitness smartwatch with GPS tracking and sweat-proof silicone strap.",
    "inStock": true,
    "tags": [
      "new"
    ]
  },
  {
    "id": "tv-m20",
    "slug": "timevex-trailguard-rugged-smart",
    "name": "TrailGuard Rugged Smart",
    "brand": "TimeVex Smart",
    "gender": "men",
    "category": "smart",
    "strap": "Nylon",
    "price": 2399,
    "oldPrice": 2999,
    "images": [
      "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's outdoor rugged smartwatch with GPS tracking and woven nylon band",
    "rating": 4.9,
    "reviews": 110,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "45 mm"
      },
      {
        "label": "Movement",
        "value": "Outdoor GPS Micro-Module"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Ultra-Bright LCD"
      }
    ],
    "description": "Heavy-duty outdoor smartwatch with altimeter, compass, and quick-drying woven nylon trail loop.",
    "inStock": true
  },
  {
    "id": "tv-m21",
    "slug": "timevex-retro-lcd-leather",
    "name": "Retro LCD Leather",
    "brand": "TimeVex Digital",
    "gender": "men",
    "category": "digital",
    "strap": "Leather",
    "price": 1199,
    "oldPrice": 1699,
    "images": [
      "https://images.pexels.com/photos/11106315/pexels-photo-11106315.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's retro digital LCD watch with genuine stitched leather strap",
    "rating": 4.6,
    "reviews": 58,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "38 mm"
      },
      {
        "label": "Movement",
        "value": "Digital Quartz IC"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Monochrome LCD"
      }
    ],
    "description": "Classic rectangular LCD digital display with alarm, EL backlight, and tan calfskin leather strap.",
    "inStock": true
  },
  {
    "id": "tv-m22",
    "slug": "timevex-vintage-cyber-steel",
    "name": "Vintage Cyber Steel",
    "brand": "TimeVex Digital",
    "gender": "men",
    "category": "digital",
    "strap": "Steel",
    "price": 1499,
    "oldPrice": 1999,
    "images": [
      "https://images.pexels.com/photos/39102103/pexels-photo-39102103.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's vintage classic digital watch with stainless steel link band",
    "rating": 4.9,
    "reviews": 183,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "36 mm"
      },
      {
        "label": "Movement",
        "value": "Digital Multi-Function Module"
      },
      {
        "label": "Water Resistance",
        "value": "Daily Splash Proof"
      },
      {
        "label": "Dial Color",
        "value": "Silver Mirror LCD"
      }
    ],
    "description": "Silver tone vintage digital watch with chronometer, hourly chime, and adjustable steel link band.",
    "inStock": true
  },
  {
    "id": "tv-m23",
    "slug": "timevex-matrix-digital-mesh",
    "name": "Matrix Digital Mesh",
    "brand": "TimeVex Digital",
    "gender": "men",
    "category": "digital",
    "strap": "Mesh",
    "price": 1399,
    "oldPrice": 1899,
    "images": [
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's modern minimalist digital watch with Milanese mesh strap",
    "rating": 4.7,
    "reviews": 62,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "38 mm"
      },
      {
        "label": "Movement",
        "value": "Digital Backlight Engine"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Negative Black Display"
      }
    ],
    "description": "Sleek low-profile black digital watch with electro-luminescent light and black stainless mesh strap.",
    "inStock": true
  },
  {
    "id": "tv-m24",
    "slug": "timevex-tactical-cyber-commando",
    "name": "Tactical Cyber Commando",
    "brand": "TimeVex Digital",
    "gender": "men",
    "category": "digital",
    "strap": "Silicone",
    "price": 899,
    "oldPrice": 1399,
    "images": [
      "https://images.pexels.com/photos/13275792/pexels-photo-13275792.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Men's military tactical shock-resistant digital watch with silicone strap",
    "rating": 4.8,
    "reviews": 145,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "46 mm"
      },
      {
        "label": "Movement",
        "value": "Shock Resistant Digital Module"
      },
      {
        "label": "Water Resistance",
        "value": "10 ATM (100m)"
      },
      {
        "label": "Dial Color",
        "value": "Dual Digital Display"
      }
    ],
    "description": "Shock-resistant digital sports watch with countdown timer, dual time zone, and flexible silicone strap.",
    "inStock": true
  },
  {
    "id": "tv-w01",
    "slug": "timevex-royale-diamond-leather",
    "name": "Royale Diamond Leather",
    "brand": "TimeVex Luxury",
    "gender": "women",
    "category": "luxury",
    "strap": "Leather",
    "price": 8499,
    "oldPrice": 11999,
    "images": [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's luxury diamond-bezel watch with genuine white leather strap",
    "rating": 4.9,
    "reviews": 154,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "32 mm"
      },
      {
        "label": "Movement",
        "value": "Swiss Automatic Movement"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Mother of Pearl"
      }
    ],
    "description": "Diamond-encrusted bezel with mother-of-pearl dial and genuine fine Italian white leather strap.",
    "inStock": true,
    "tags": [
      "bestseller"
    ],
    "featured": true
  },
  {
    "id": "tv-w02",
    "slug": "timevex-emerald-diamond-luxury",
    "name": "Emerald Diamond Luxury",
    "brand": "TimeVex Luxury",
    "gender": "women",
    "category": "luxury",
    "strap": "Steel",
    "price": 9299,
    "oldPrice": 13999,
    "images": [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's luxury gold watch with emerald green sunburst dial and steel link bracelet",
    "rating": 4.9,
    "reviews": 218,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "30 mm"
      },
      {
        "label": "Movement",
        "value": "Swiss Quartz Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Emerald Sunburst"
      }
    ],
    "description": "Swarovski crystal bezel indices, emerald green dial, and 18K gold-plated stainless steel bracelet.",
    "inStock": true,
    "tags": [
      "bestseller"
    ],
    "featured": true
  },
  {
    "id": "tv-w04",
    "slug": "timevex-glamour-sport-rose-gold",
    "name": "Glamour Sport Rose Gold",
    "brand": "TimeVex Luxury",
    "gender": "women",
    "category": "luxury",
    "strap": "Silicone",
    "price": 6499,
    "oldPrice": 8999,
    "images": [
      "https://images.pexels.com/photos/14312717/pexels-photo-14312717.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's luxury rose gold sports watch with premium silicone strap",
    "rating": 4.7,
    "reviews": 67,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "36 mm"
      },
      {
        "label": "Movement",
        "value": "Precision Swiss Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Rose Gold Shimmer"
      }
    ],
    "description": "Rose gold case framed with baguette crystals paired with an ultra-soft white silicone sport strap.",
    "inStock": true,
    "tags": [
      "new"
    ]
  },
  {
    "id": "tv-w05",
    "slug": "timevex-riviera-silk-weave",
    "name": "Riviera Silk Weave",
    "brand": "TimeVex Luxury",
    "gender": "women",
    "category": "luxury",
    "strap": "Nylon",
    "price": 5999,
    "oldPrice": 7999,
    "images": [
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's luxury gold timepiece with patterned woven strap",
    "rating": 4.8,
    "reviews": 55,
    "specs": [
      {
        "label": "Category",
        "value": "Luxury"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "34 mm"
      },
      {
        "label": "Movement",
        "value": "Quartz Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Warm Champagne"
      }
    ],
    "description": "Polished luxury gold case with champagne dial and patterned high-density nylon ribbon strap.",
    "inStock": true
  },
  {
    "id": "tv-w06",
    "slug": "timevex-chloe-boyfriend-chrono",
    "name": "Chloe Boyfriend Chrono",
    "brand": "TimeVex Chrono",
    "gender": "women",
    "category": "chronograph",
    "strap": "Leather",
    "price": 3299,
    "oldPrice": 4899,
    "images": [
      "https://images.pexels.com/photos/25052866/pexels-photo-25052866.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's oversized boyfriend chronograph watch with stitched leather strap",
    "rating": 4.8,
    "reviews": 108,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "38 mm"
      },
      {
        "label": "Movement",
        "value": "Quartz Chronograph Sub-Dials"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Rose Tint White"
      }
    ],
    "description": "Oversized chic chronograph with triple sub-dials, rose gold hands, and soft tan leather band.",
    "inStock": true
  },
  {
    "id": "tv-w07",
    "slug": "timevex-grace-chronograph-steel",
    "name": "Grace Chronograph Steel",
    "brand": "TimeVex Chrono",
    "gender": "women",
    "category": "chronograph",
    "strap": "Steel",
    "price": 3999,
    "oldPrice": 5799,
    "images": [
      "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's silver stainless steel chronograph watch with Roman numerals",
    "rating": 4.9,
    "reviews": 132,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "36 mm"
      },
      {
        "label": "Movement",
        "value": "Japanese Chronograph Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Two-Tone Silver"
      }
    ],
    "description": "Two-tone silver and rose gold steel chronograph with date window and mineral crystal.",
    "inStock": true
  },
  {
    "id": "tv-w08",
    "slug": "timevex-rose-radiance-chrono",
    "name": "Rose Radiance Chrono",
    "brand": "TimeVex Chrono",
    "gender": "women",
    "category": "chronograph",
    "strap": "Mesh",
    "price": 3699,
    "oldPrice": 4999,
    "images": [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's rose gold chronograph watch with triple sub-dials and mesh strap",
    "rating": 4.9,
    "reviews": 174,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "34 mm"
      },
      {
        "label": "Movement",
        "value": "Multi-Dial Chrono Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Rose Gold Sunburst"
      }
    ],
    "description": "Rose gold sunray sub-dials with tachymeter rim and smooth Milanese magnetic mesh bracelet.",
    "inStock": true
  },
  {
    "id": "tv-w09",
    "slug": "timevex-active-glam-chrono",
    "name": "Active Glam Chrono",
    "brand": "TimeVex Chrono",
    "gender": "women",
    "category": "chronograph",
    "strap": "Silicone",
    "price": 2699,
    "oldPrice": 3899,
    "images": [
      "https://images.pexels.com/photos/13646797/pexels-photo-13646797.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's active sport chronograph watch with durable silicone strap",
    "rating": 4.7,
    "reviews": 82,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "36 mm"
      },
      {
        "label": "Movement",
        "value": "Quartz Stopwatch Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Pastel Blue"
      }
    ],
    "description": "Sports chronograph stopwatch with dual sub-dials and blush pink hypoallergenic silicone band.",
    "inStock": true
  },
  {
    "id": "tv-w10",
    "slug": "timevex-heritage-sailor-chrono",
    "name": "Heritage Sailor Chrono",
    "brand": "TimeVex Chrono",
    "gender": "women",
    "category": "chronograph",
    "strap": "Nylon",
    "price": 2499,
    "oldPrice": 3499,
    "images": [
      "https://images.pexels.com/photos/28157826/pexels-photo-28157826.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's nautical chronograph watch with woven striped nylon strap",
    "rating": 4.6,
    "reviews": 49,
    "specs": [
      {
        "label": "Category",
        "value": "Chronograph"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "35 mm"
      },
      {
        "label": "Movement",
        "value": "Quartz Chronograph"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Crisp White"
      }
    ],
    "description": "Nautical inspired chronograph dial with rose gold markers and striped navy-pink nylon strap.",
    "inStock": true
  },
  {
    "id": "tv-w12",
    "slug": "timevex-silver-mirage-analog",
    "name": "Silver Mirage Analog",
    "brand": "TimeVex Classic",
    "gender": "women",
    "category": "analog",
    "strap": "Steel",
    "price": 2399,
    "oldPrice": 3299,
    "images": [
      "https://images.pexels.com/photos/9713527/pexels-photo-9713527.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's silver polished stainless steel analog watch with sunray dial",
    "rating": 4.8,
    "reviews": 97,
    "specs": [
      {
        "label": "Category",
        "value": "Analog"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "32 mm"
      },
      {
        "label": "Movement",
        "value": "Precision Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "Silver Sunray"
      }
    ],
    "description": "Shimmering silver sunburst dial with sleek baton markers and polished steel bracelet.",
    "inStock": true
  },
  {
    "id": "tv-w13",
    "slug": "timevex-stellar-galaxy-dial",
    "name": "Stellar Galaxy Dial",
    "brand": "TimeVex Classic",
    "gender": "women",
    "category": "analog",
    "strap": "Mesh",
    "price": 2199,
    "oldPrice": 2999,
    "images": [
      "https://images.pexels.com/photos/60147/pexels-photo-60147.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's celestial starry dial watch with magnetic mesh strap",
    "rating": 4.9,
    "reviews": 165,
    "specs": [
      {
        "label": "Category",
        "value": "Analog"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "32 mm"
      },
      {
        "label": "Movement",
        "value": "Japanese Quartz"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Midnight Blue Starry"
      }
    ],
    "description": "Cosmic vintage dial paired with an adjustable steel mesh strap.",
    "inStock": true
  },
  {
    "id": "tv-w14",
    "slug": "timevex-pastel-blossom-analog",
    "name": "Pastel Blossom Analog",
    "brand": "TimeVex Classic",
    "gender": "women",
    "category": "analog",
    "strap": "Silicone",
    "price": 1499,
    "oldPrice": 2199,
    "images": [
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's casual pastel analog watch with soft touch silicone strap",
    "rating": 4.7,
    "reviews": 73,
    "specs": [
      {
        "label": "Category",
        "value": "Analog"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "34 mm"
      },
      {
        "label": "Movement",
        "value": "Quartz Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Pastel Cream"
      }
    ],
    "description": "Water-resistant daily analog watch with minimalist indices and silky matte silicone strap.",
    "inStock": true
  },
  {
    "id": "tv-w17",
    "slug": "timevex-glamour-touch-steel",
    "name": "Glamour Touch Steel",
    "brand": "TimeVex Smart",
    "gender": "women",
    "category": "smart",
    "strap": "Steel",
    "price": 2899,
    "oldPrice": 4199,
    "images": [
      "https://images.pexels.com/photos/31406895/pexels-photo-31406895.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's touch display smartwatch with stainless steel bracelet",
    "rating": 4.9,
    "reviews": 146,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Steel"
      },
      {
        "label": "Case Diameter",
        "value": "38 mm"
      },
      {
        "label": "Movement",
        "value": "Bluetooth Smart SoC"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Waterproof"
      },
      {
        "label": "Dial Color",
        "value": "HD Glass Display"
      }
    ],
    "description": "Jewellery bracelet smartwatch with Bluetooth calling, heart rate, and polished rose steel links.",
    "inStock": true
  },
  {
    "id": "tv-w18",
    "slug": "timevex-nova-touch-mesh",
    "name": "Nova Touch Mesh",
    "brand": "TimeVex Smart",
    "gender": "women",
    "category": "smart",
    "strap": "Mesh",
    "price": 2699,
    "oldPrice": 3499,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's slim digital smartwatch with rose gold mesh band",
    "rating": 4.8,
    "reviews": 114,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Mesh"
      },
      {
        "label": "Case Diameter",
        "value": "39 mm"
      },
      {
        "label": "Movement",
        "value": "Color Touch Engine"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Waterproof"
      },
      {
        "label": "Dial Color",
        "value": "Animated Dial UI"
      }
    ],
    "description": "Ultra-thin bezel smartwatch with 100+ customizable faces and rose gold magnetic mesh band.",
    "inStock": true
  },
  {
    "id": "tv-w19",
    "slug": "timevex-pulse-smart-edition",
    "name": "Pulse Smart Edition",
    "brand": "TimeVex Smart",
    "gender": "women",
    "category": "smart",
    "strap": "Silicone",
    "price": 2299,
    "oldPrice": 3199,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's fitness tracking smartwatch with heart rate sensor and pink silicone band",
    "rating": 4.8,
    "reviews": 189,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "38 mm"
      },
      {
        "label": "Movement",
        "value": "Health Monitoring OS"
      },
      {
        "label": "Water Resistance",
        "value": "IP68 Waterproof"
      },
      {
        "label": "Dial Color",
        "value": "Full Color Touchscreen"
      }
    ],
    "description": "Fitness tracking, sleep monitor, and notifications with comfortable pastel pink silicone strap.",
    "inStock": true,
    "tags": [
      "bestseller"
    ]
  },
  {
    "id": "tv-w20",
    "slug": "timevex-active-band-loop",
    "name": "Active Band Loop",
    "brand": "TimeVex Smart",
    "gender": "women",
    "category": "smart",
    "strap": "Nylon",
    "price": 1999,
    "oldPrice": 2899,
    "images": [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's lightweight sport smartwatch with breathable nylon loop",
    "rating": 4.7,
    "reviews": 76,
    "specs": [
      {
        "label": "Category",
        "value": "Smart"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "37 mm"
      },
      {
        "label": "Movement",
        "value": "Activity Tracking Chip"
      },
      {
        "label": "Water Resistance",
        "value": "Daily Splash Proof"
      },
      {
        "label": "Dial Color",
        "value": "OLED Display"
      }
    ],
    "description": "Lightweight fitness tracker with step counter, water reminder, and breathable nylon loop.",
    "inStock": true
  },
  {
    "id": "tv-w21",
    "slug": "timevex-vintage-chic-digital",
    "name": "Vintage Chic Digital",
    "brand": "TimeVex Digital",
    "gender": "women",
    "category": "digital",
    "strap": "Leather",
    "price": 1099,
    "oldPrice": 1599,
    "images": [
      "https://images.pexels.com/photos/6349111/pexels-photo-6349111.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's retro gold digital watch with brown leather strap",
    "rating": 4.6,
    "reviews": 51,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Leather"
      },
      {
        "label": "Case Diameter",
        "value": "32 mm"
      },
      {
        "label": "Movement",
        "value": "Digital LCD Micro-Circuit"
      },
      {
        "label": "Water Resistance",
        "value": "Daily Splash Proof"
      },
      {
        "label": "Dial Color",
        "value": "Amber LCD"
      }
    ],
    "description": "Petite retro digital module framed in rose gold with stitched leather strap.",
    "inStock": true
  },
  {
    "id": "tv-w24",
    "slug": "timevex-fitpro-digital-sport",
    "name": "FitPro Digital Sport",
    "brand": "TimeVex Digital",
    "gender": "women",
    "category": "digital",
    "strap": "Silicone",
    "price": 799,
    "oldPrice": 1199,
    "images": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=900&q=80"
    ],
    "imageAlt": "Women's waterproof digital sports watch with mint silicone strap",
    "rating": 4.7,
    "reviews": 95,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Silicone"
      },
      {
        "label": "Case Diameter",
        "value": "35 mm"
      },
      {
        "label": "Movement",
        "value": "Sports Digital Stopwatch"
      },
      {
        "label": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "label": "Dial Color",
        "value": "High-Contrast LCD"
      }
    ],
    "description": "Waterproof digital sports watch with stopwatch and soft mint silicone strap.",
    "inStock": true
  },
  {
    "id": "tv-w25",
    "slug": "timevex-metro-casual-digital",
    "name": "Metro Casual Digital",
    "brand": "TimeVex Digital",
    "gender": "women",
    "category": "digital",
    "strap": "Nylon",
    "price": 599,
    "oldPrice": 899,
    "images": [
      "https://images.pexels.com/photos/13610156/pexels-photo-13610156.jpeg?auto=compress&cs=tinysrgb&w=900"
    ],
    "imageAlt": "Women's casual digital watch with woven pastel nylon strap",
    "rating": 4.6,
    "reviews": 58,
    "specs": [
      {
        "label": "Category",
        "value": "Digital"
      },
      {
        "label": "Strap Material",
        "value": "Nylon"
      },
      {
        "label": "Case Diameter",
        "value": "33 mm"
      },
      {
        "label": "Movement",
        "value": "Digital Quartz Calibre"
      },
      {
        "label": "Water Resistance",
        "value": "3 ATM (30m)"
      },
      {
        "label": "Dial Color",
        "value": "Compact LCD"
      }
    ],
    "description": "Colorful and durable digital watch with stopwatch, timer, and washable nylon strap.",
    "inStock": true,
    "tags": [
      "new"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  const current = PRODUCTS.find((p) => p.id === currentId);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(
    (p) => p.id !== currentId && (p.category === current.category || p.gender === current.gender)
  ).slice(0, limit);
}
