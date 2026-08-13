export const products = [
  // Electronics
  {
    id: 1,
    title: "Pro Noise-Canceling Wireless Headphones",
    category: "electronics",
    price: 199.99,
    rating: 4.8,
    reviews: 142,
    image: "https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_800x.png?v=1750486829",
    description: "The ultimate over‑ear personal listening experience in five vibrant colours with up to 1.5x more Active Noise Cancellation.",
    featured: true,
    createdAt: "2026-01-15"
  },
  {
    id: 2,
    title: "Ultra-Slim Mechanical Wireless Keyboard",
    category: "electronics",
    price: 129.50,
    rating: 4.7,
    reviews: 89,
    image: "https://m.media-amazon.com/images/I/61FHyO7EedL.jpg",
    description: "Low-profile tactile switches, RGB ambient backlighting, and seamless multi-device Bluetooth pairing.",
    featured: true,
    createdAt: "2026-01-20"
  },
  {
    id: 3,
    title: "Minimalist Smart Watch Pro",
    category: "electronics",
    price: 249.00,
    rating: 4.9,
    reviews: 210,
    image: "https://media.tatacroma.com/Croma%20Assets/Wearable/Wearable%20Devices/Images/312704_sdjmbm.png",
    description: "High-definition AMOLED display, heart rate and SpO2 tracking, titanium bezel, and 7-day battery endurance.",
    featured: true,
    createdAt: "2026-02-01"
  },
  {
    id: 4,
    title: "Boat Wireless Earbuds",
    category: "electronics",
    price: 119.99,
    rating: 4.6,
    reviews: 65,
    image: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard3_238a3c47-bdff-4909-951a-4c80593dcec0_1024x.jpg?v=1706515408://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    description: "Wireless Earbuds with 45 Hours Playback, BEAST™ Mode, ASAP™ Charge, Dual Mics with ENx™ Technology",
    featured: false,
    createdAt: "2026-01-05"
  },

  // Clothing
  {
    id: 5,
    title: "Minimalist Heavyweight Hoodie",
    category: "clothing",
    price: 78.00,
    rating: 4.8,
    reviews: 115,
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/5536723/1.jpg?8946://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
    description: "Men Pullover Hoodies Long Sleeve Pocket Sweatshirt Winter Casual Pullover Hoodie Jackets.",
    featured: true,
    createdAt: "2026-01-18"
  },
  {
    id: 6,
    title: "Urban Technical Windbreaker",
    category: "clothing",
    price: 135.00,
    rating: 4.6,
    reviews: 74,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AFsCku5yIZbe4YYRfi-BZAMqVxyz9CJQl4yw5tc98qkw0RirecQ6fNI&s=10",
    description: "Water-repellent ripstop fabric with thermal fleece lining, taped seams, and concealed utility pockets.",
    featured: false,
    createdAt: "2026-01-22"
  },
  {
    id: 7,
    title: "Essential Crewneck Sweatshirt",
    category: "clothing",
    price: 55.00,
    rating: 4.5,
    reviews: 98,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/632091/16/mod01/fnd/IND/fmt/png/PREMIUM-ESSENTIALS-Relaxed-Crew-Sweatshirt://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80",
    description: "PREMIUM ESSENTIALS Relaxed Crew Sweatshirt with ribbed cuffs and hem. Pre-shrunk premium cotton fleece blend.",
    featured: false,
    createdAt: "2026-01-10"
  },
  {
    id: 8,
    title: "Tailored Slim Denim Jacket",
    category: "clothing",
    price: 110.00,
    rating: 4.7,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
    description: "Classic dark wash denim with subtle stretch comfort, matte black hardware, and double chest pockets.",
    featured: true,
    createdAt: "2026-02-03"
  },

  // Furniture
  {
    id: 9,
    title: "Ergonomic Mesh Executive Chair",
    category: "furniture",
    price: 349.99,
    rating: 4.9,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1776548759593-6fa64c60129f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVyZ29ub21pYyUyME1lc2glMjBFeGVjdXRpdmUlMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D://images.unsplash.com/photo-1580481072645-022f9a6d8310?w=600&auto=format&fit=crop&q=80",
    description: "Breathable lumbar support, 4D adjustable armrests, sync-tilt mechanism, and heavy-duty aluminum base.",
    featured: true,
    createdAt: "2026-01-12"
  },
  {
    id: 10,
    title: "Solid Walnut Standing Desk",
    category: "furniture",
    price: 599.00,
    rating: 4.9,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80",
    description: "Dual motor electric height adjustment, anti-collision sensor, integrated cable management tray, and solid wood desk top.",
    featured: true,
    createdAt: "2026-01-28"
  },
  {
    id: 11,
    title: "Nordic Minimalist Side Table",
    category: "furniture",
    price: 89.99,
    rating: 4.4,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE5vcmRpYyUyME1pbmltYWxpc3QlMjBTaWRlJTIwVGFibGV8ZW58MHx8MHx8fDA%3D://images.unsplash.com/photo-1532372688391-768160350438?w=600&auto=format&fit=crop&q=80",
    description: "Scandi-inspired round accent table with matte steel tripod legs and sustainable natural oak top.",
    featured: false,
    createdAt: "2026-01-08"
  },
  {
    id: 12,
    title: "Adjustable Monitor Arm Mount",
    category: "furniture",
    price: 74.50,
    rating: 4.8,
    reviews: 92,
    image: "https://www.ergoyou.in/cdn/shop/files/image_32_1200x1200.png?v=1770445869",
    description: "Gas spring aluminum arm supporting monitors up to 32 inches with 360-degree rotation and tilt capability.",
    featured: false,
    createdAt: "2026-01-25"
  },

  // Home
  {
    id: 13,
    title: "Smart Ambient LED Light Bar Pack",
    category: "home",
    price: 69.99,
    rating: 4.7,
    reviews: 160,
    image: "https://5.imimg.com/data5/SELLER/Default/2026/2/584710997/JO/KT/NX/68103635/smart-rgb-led-light-bars-2pcs-ambient-lighting-for-tv-27cm-usb-powered-mood-lights-b0gflzdqht-500x500.png",
    description: "Syncs with music and screen colors. Features 16 million RGB colors, voice control, and app scheduling.",
    featured: true,
    createdAt: "2026-01-19"
  },
  {
    id: 14,
    title: "Ultrasonic Essential Oil Diffuser",
    category: "home",
    price: 42.00,
    rating: 4.6,
    reviews: 84,
    image: "https://www.thegoodroad.in/cdn/shop/files/Wooden_Cool_Mist_Humidifiers_cum_oil_diffuse_organic_bazar_lifestyle_1.jpg?v=1758544543",
    description: "Ceramic stoneware cover, whisper-quiet ultrasonic misting, auto shut-off, and warm LED nightlight glow.",
    featured: false,
    createdAt: "2026-01-14"
  },
  {
    id: 15,
    title: "Matte Ceramic Coffee Carafe Set",
    category: "home",
    price: 48.50,
    rating: 4.8,
    reviews: 67,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb083942O7b0Qj6x-1-x-2-5-F1pP2W-Lp8-A&s",
    description: "Handcrafted pour-over carafe with double-wall stainless filter and two matching stoneware cups.",
    featured: false,
    createdAt: "2026-01-30"
  },
  {
    id: 16,
    title: "Air Purifying Smart HEPA Unit",
    category: "home",
    price: 179.00,
    rating: 4.8,
    reviews: 103,
    image: "https://m.media-amazon.com/images/I/51NZx-GppcL._AC_UF894,1000_QL80_.jpg",
    description: "3-stage true HEPA filtration removes 99.97% of airborne particles. Real-time air quality indicator light.",
    featured: true,
    createdAt: "2026-02-04"
  },

  // Sports
  {
    id: 17,
    title: "Pro Non-Slip Eco Yoga Mat",
    category: "sports",
    price: 49.99,
    rating: 4.7,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80",
    description: "Biodegradable natural rubber core with extra cushioning (5mm) and laser-etched alignment guides.",
    featured: false,
    createdAt: "2026-01-16"
  },
  {
    id: 18,
    title: "Insulated Stainless Steel Water Bottle",
    category: "sports",
    price: 34.00,
    rating: 4.9,
    reviews: 240,
    image: "https://femora.in/cdn/shop/products/post1cola-01_40477242-ec79-4e4f-895d-3550e6a51956.jpg?v=1675578882",
    description: "Double-wall vacuum insulation keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof straw lid.",
    featured: true,
    createdAt: "2026-01-24"
  },
  {
    id: 19,
    title: "Resistance Band Set with Handles",
    category: "sports",
    price: 29.99,
    rating: 4.5,
    reviews: 79,
    image: "https://m.media-amazon.com/images/I/61IgUDZmDPL._AC_UF894,1000_QL80_.jpg",
    description: "5 color-coded natural latex exercise bands ranging from 10 lbs to 50 lbs with door anchor & carry bag.",
    featured: false,
    createdAt: "2026-01-11"
  },
  {
    id: 20,
    title: "Adjustable Dumbbell Set (Pair)",
    category: "sports",
    price: 220.00,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1703668984128-b506579acdd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWRqdXN0YWJsZSUyMER1bWJiZWxsJTIwU2V0JTIwKFBhaXIpfGVufDB8fDB8fHww://images.unsplash.com/photo-1638805981949-332d87516db3?w=600&auto=format&fit=crop&q=80",
    description: "Quick-adjust weight selector dial from 5 lbs to 52.5 lbs each. Compact space-saving home gym design.",
    featured: true,
    createdAt: "2026-02-02"
  },

  // Accessories
  {
    id: 21,
    title: "Full-Grain Leather Weekender Bag",
    category: "accessories",
    price: 185.00,
    rating: 4.9,
    reviews: 95,
    image: "https://mahetri.in/cdn/shop/collections/Leather-Duffel-bag_1000x1000.jpg?v=1649315077",
    description: "Handmade full-grain cowhide leather with padded 15-inch laptop sleeve, brass zippers, and shoe compartment.",
    featured: true,
    createdAt: "2026-01-21"
  },
  {
    id: 22,
    title: "Polarized Acetate Sunglasses",
    category: "accessories",
    price: 85.00,
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    description: "Hand-polished Italian acetate frame with 100% UV400 anti-glare polarized lenses and microfiber pouch.",
    featured: false,
    createdAt: "2026-01-13"
  },
  {
    id: 23,
    title: "Minimalist Slim Leather Cardholder",
    category: "accessories",
    price: 38.00,
    rating: 4.8,
    reviews: 140,
    image: "https://kinnoti.com/cdn/shop/files/kinnoti-wallet-slim-leather-wallet-minimalist-card-money-holder-1217347600.png?v=1768916632&width=3000",
    description: "RFID-blocking slim front-pocket wallet holding up to 8 cards and folded cash notes.",
    featured: false,
    createdAt: "2026-01-27"
  },
  {
    id: 24,
    title: "Canvas & Leather Laptop Sleeve",
    category: "accessories",
    price: 45.00,
    rating: 4.7,
    reviews: 82,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0aa435b434e9493a97061977ae147f2eG.jpg",
    description: "Water-resistant waxed canvas exterior with soft plush interior lining for 13 to 16-inch laptops.",
    featured: false,
    createdAt: "2026-01-29"
  }
];
