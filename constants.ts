import { Product, Category, Testimonial } from './types';

// Your category list is perfect
export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Household Products', imageUrl: 'https://images.pexels.com/photos/4207790/pexels-photo-4207790.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'household-products' },
  { id: '2', name: 'Kitchen Equipments', imageUrl: 'https://images.pexels.com/photos/6932014/pexels-photo-6932014.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'kitchen-equipments' },
  { id: '3', name: 'Mobile Accessories', imageUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'mobile-accessories' },
  { id: '4', name: 'Bathroom Products', imageUrl: 'https://images.pexels.com/photos/7005476/pexels-photo-7005476.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'bathroom-products' },
  { id: '5', name: 'Water Bottles', imageUrl: 'https://images.pexels.com/photos/13045618/pexels-photo-13045618.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'water-bottles' },
  { id: '6', name: 'Fitness Equipments', imageUrl: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'fitness-equipments' },
  { id: '7', name: 'Kids & Baby', imageUrl: 'https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'kids-baby' },
  { id: '8', name: 'Lights & Lamps', imageUrl: 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'lights-lamps' },
  { id: '9', name: 'Health & Massagers', imageUrl: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'health-massagers' },
  { id: '10', name: 'Car & Bike Accessories', imageUrl: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'car-bike-accessories' },
  { id: '11', name: 'Personal Grooming', imageUrl: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400', slug: 'personal-grooming' },
];

// --- YOUR PRODUCT LIST WITH ALL 19 PRODUCTS & CORRECTED FILENAMES ---
export const MOCK_PRODUCTS: Product[] = [
  // --- PRODUCT 1: Crystal Lamp (Existing) ---
  {
    id: '1',
    name: 'Crystal Lamp, 16 Color Changing Rose Diamond Table Lamp, USB Rechargeable Led Strip Lighting Touch Bedside Night Light with Remote Control',
    slug: 'crystal-rose-diamond-table-lamp',
    description: 'A mesmerizing rose crystal diamond lamp that adds glamour and sophistication to any room. Features 16 vibrant colors controlled by touch or remote.',
    price: 299,
    originalPrice: 1499,
    category: 'Lights & Lamps',
    subcategory: 'Decorative Lights',
    tags: [ 'crystal lamp', 'table lamp', 'rgb', '16 color', 'rose diamond', 'usb rechargeable', 'touch lamp', 'remote control', 'night light', 'bedside lamp', 'gift idea', 'desidiya' ],
    imageUrl: '/images/Crystal-Table-Lamp1.png',
    images: ['/images/Crystal-Table-Lamp2.png', '/images/Crystal-Table-Lamp3.png'],
    productDetails: [
      { heading: "💡 Product Overview", points: ["Add a luxurious sparkle to your home with this Crystal Rose Diamond Table Lamp. Designed to catch the eye and elevate your decor, this stunning lamp offers a perfect blend of elegance and functionality. Whether you're setting the mood for a relaxing evening or lighting up your space with vibrant colors, this crystal lamp delivers brilliance in every shade."] },
      { heading: "🌟 Why You’ll Love It", points: [ "Elegant Crystal Finish: Featuring a rose diamond-inspired cut, this lamp reflects light beautifully, adding a touch of class to your bedroom, living area, or desk.", "16 Color Variations: Choose from 16 unique LED colors to match your mood. From calming pastels to bold and vivid tones, switch it up anytime for a new ambiance.", "Touch & Remote Operation: Control the light your way—simply tap the base for quick access or use the included remote to fine-tune color, brightness, or switch lighting modes.", "USB Rechargeable Convenience: Forget about replacing batteries. With built-in USB charging, this lamp is both eco-friendly and cost-effective. Charge it up and enjoy hours of colorful glow.", "Perfect for Every Setting: Ideal for cozy nights, romantic dinners, festive events, or just unwinding at the end of the day. It’s more than a lamp—it’s a mood enhancer.", "A Stylish Gift Option: Looking for a gift that wows? This lamp is a thoughtful choice for birthdays, housewarmings, anniversaries, or holiday surprises." ] },
      { heading: "📦 Specifications", points: [ "Light Modes: 16 Color Options", "Control: Touch + Remote", "Charging: USB Rechargeable", "Use: Indoor – Bedrooms, Living Rooms, Offices, Parties" ] }
    ],
    rating: 4.8, reviews: 85, stock: 150, isNew: true, isFeatured: true, isTrending: true,
  },
  // --- PRODUCT 2: Digital Alarm Clock (Existing) ---
  {
    id: '2',
    name: 'Digital Alarm Clock with 7-Color LED & Thermometer',
    slug: 'digital-alarm-clock-7-color',
    description: 'A versatile digital alarm clock featuring a 7-color changing LED backlight, snooze, thermometer, and calendar functions.',
    price: 300,
    originalPrice: 999,
    category: 'Household Products',
    subcategory: 'Digital Clocks',
    tags: [ 'digital clock', 'alarm clock', 'led clock', '7 color', 'snooze', 'thermometer', 'calendar', 'kids bedroom', 'office', 'desk clock' ],
    imageUrl: '/images/digital-alarm-clock1.png',
    images: ['/images/digital-alarm-clock2.png', '/images/digital-alarm-clock3.png', '/images/digital-alarm-clock4.png', '/images/digital-alarm-clock5.png', '/images/digital-alarm-clock6.png'],
    productDetails: [
      { heading: "Key Features", points: ["Package Included: 1 x 7 Color Changing Clock (batteries not included).", "Large LCD Screen: Clearly displays time, date, week, and temperature.", "7-Color Backlight: The internal LED provides a soothing seven-color backlight.", "Calendar Function: Keeps you updated with the year, month, and date.", "Versatile Use: Perfect for home bedrooms, kids' rooms, schools, and offices."] }
    ],
    rating: 4.6, reviews: 45, stock: 200, isNew: true, isTrending: true,
  },
  // --- PRODUCT 3: Panda Night Light ---
  {
    id: '3',
    name: 'Panda Silicone Night Light – 7-Color LED Rechargeable Lamp for Kids',
    slug: 'panda-silicone-night-light',
    description: 'Soft, safe, and full of color, this rechargeable panda night light makes bedtime magical.',
    price: 469,
    originalPrice: 469,
    category: 'Lights & Lamps',
    subcategory: 'Kids Night Lights',
    tags: ['panda', 'night light', 'led lamp', 'kids room', 'rechargeable', 'silicone', '7 color'],
    imageUrl: '/images/panda-night-lamp1.png',
    images: ['/images/panda-night-lamp2.png', '/images/panda-night-lamp3.png'],
    productDetails: [
      { heading: "💡 Features You’ll Love", points: ["Adorable Panda Design: Whimsical and cute, this panda-shaped lamp brightens any space.", "7 LED Color Modes: Switch between warm white, pastel hues, or dynamic color-changing mode by tapping.", "USB Rechargeable & Portable: One full charge offers hours of soft illumination.", "Kid-Friendly & Safe: Made from high-quality, BPA-free silicone, safe for children to touch and hug.", "Soothing Sleep Support: Provides gentle lighting ideal for easing bedtime anxiety.", "A Gift Full of Warmth: A wonderful choice for birthdays, baby showers, or Christmas."] },
      { heading: "📦 What’s in the Box", points: ["1× Panda Silicone Night Light", "1× USB Charging Cable", "1× User Manual"] },
    ],
    rating: 4.9, reviews: 112, stock: 150, isNew: true, isFeatured: true, isTrending: true,
  },
  // --- PRODUCT 4: USB Desktop Light ---
  {
    id: '4',
    name: '360° Adjustable USB Desktop Light – Modern LED Mood Lamp (Green)',
    slug: 'adjustable-usb-desktop-light-green',
    description: 'A flexible and modern desk lamp with dual lighting modes and an automatic color-changing base.',
    price: 399,
    originalPrice: 799,
    category: 'Lights & Lamps',
    subcategory: 'Desk Lamps',
    tags: ['desk lamp', 'led light', 'mood lamp', 'usb rechargeable', 'study light', 'modern', 'flexible'],
    imageUrl: '/images/usb-desktop-light1.png',
    images: ['/images/usb-desktop-light2.png', '/images/usb-desktop-light3.png', '/images/usb-desktop-light4.png', '/images/usb-desktop-light5.png'],
    productDetails: [
      { heading: "✅ Product Highlights", points: ["360° Flexible Neck Design: Easily twist and turn the lamp head to direct light.", "Dual Lighting Modes: Switch between a soft ambient glow or a brighter beam.", "Automatic Color-Changing Base: The lamp’s base gently cycles through colors.", "Bright & Efficient LED Lighting: Delivers bright, clear light while saving energy.", "USB Rechargeable for Portability: Enjoy wireless, clutter-free lighting wherever you go."] },
      { heading: "📦 Specifications", points: ["Color: Green", "Style: Modern", "Power Source: USB Rechargeable", "Switch Type: Push Button"] },
    ],
    rating: 4.7, reviews: 88, stock: 120, isNew: true, isTrending: true,
  },
  // --- PRODUCT 5: 3-in-1 Car Vacuum ---
  {
    id: '5',
    name: '3-in-1 Portable Car Vacuum Cleaner – Compact, Cordless & USB Rechargeable',
    slug: '3-in-1-portable-car-vacuum',
    description: 'A go-to solution for quick, convenient, and powerful cleaning at home, in your car, or on the go.',
    price: 399,
    originalPrice: 999,
    category: 'Car & Bike Accessories',
    subcategory: 'Car Care',
    tags: ['car vacuum', 'portable vacuum', 'cordless', 'usb rechargeable', 'car accessories', 'cleaner'],
    // --- CORRECTED FILENAME (lowercase, fixed typo) ---
    imageUrl: '/images/portable-vacuum-cleaner1.png',
    images: ['/images/portable-vacuum-cleaner2.png', '/images/portable-vacuum-cleaner3.png'],
    productDetails: [
      { heading: "🔧 Key Features", points: ["3-in-1 Cleaning Power: Combines vacuuming, blowing, and mini suction in one handy device.", "Wireless & USB Rechargeable: No cords, no hassle. Recharge via USB for cordless convenience.", "Compact & Lightweight Design: Designed to fit in one hand and store easily.", "High-Efficiency HEPA Filtration: Traps fine dust with a washable, reusable filter.", "Multi-Surface Cleaning: Removes pet hair, crumbs, dust, and debris."] },
      { heading: "📦 What’s in the Box", points: ["1× 3-in-1 Vacuum Cleaner", "1× USB Charging Cable", "1× Reusable HEPA Filter", "Multiple Nozzles", "1× User Manual"] },
    ],
    rating: 4.6, reviews: 95, stock: 100, isNew: true, isTopSeller: true,
  },
  // --- PRODUCT 6: EMS Body Massager ---
  {
    id: '6',
    name: 'Wireless EMS Body Massager – 8 Modes, 19 Strength Levels',
    slug: 'wireless-ems-body-massager',
    description: 'A compact yet powerful device designed to relieve muscle tension, improve circulation, and ease everyday pain.',
    price: 150,
    originalPrice: 219,
    category: 'Health & Massagers',
    subcategory: 'Electric Massagers',
    tags: ['ems massager', 'pain relief', 'mini massager', 'butterfly massager', 'neck pain', 'back pain'],
    // --- CORRECTED FILENAME (lowercase) ---
    imageUrl: '/images/mini-massager1.png',
    images: ['/images/mini-massager2.png', '/images/mini-massager3.png', '/images/mini-massager4.png'],
    productDetails: [
      { heading: "🔧 Key Features", points: ["8 Massage Modes & 19 Intensity Levels: Customize your relief with a variety of massage sensations.", "Wireless & Lightweight Design: Offers total freedom of movement.", "Self-Adhesive & Reusable Pads: Easy to apply and designed to stay in place.", "EMS Technology for Real Relief: Penetrates deep into muscle layers to promote blood flow."] },
      { heading: "💡 Benefits", points: ["Relieves muscle fatigue and tension.", "Promotes healthy blood circulation.", "Compact & portable – perfect for home, office, or travel."] },
    ],
    rating: 4.5, reviews: 130, stock: 200, isNew: true,
  },
  // --- PRODUCT 7: Electric Mini Chopper ---
  {
    id: '7',
    name: 'Smart Electric Mini Chopper – Garlic, Onion & Vegetable Cutter',
    slug: 'smart-electric-mini-chopper',
    description: 'Your go-to kitchen assistant for effortless chopping of garlic, onions, herbs, and vegetables in seconds.',
    price: 349,
    originalPrice: 699,
    category: 'Kitchen Equipments',
    subcategory: 'Food Preparation',
    tags: ['mini chopper', 'electric chopper', 'garlic cutter', 'onion chopper', 'kitchen gadget', 'food processor'],
    // --- CORRECTED FILENAME (lowercase) ---
    imageUrl: '/images/portable-electric-chopper1.png',
    images: ['/images/portable-electric-chopper2.png', '/images/portable-electric-chopper3.png'],
    productDetails: [
      { heading: "🔹 Key Features", points: ["Versatile & Multi-Use: Perfect for chopping garlic, onions, ginger, chilies, and herbs.", "One-Touch Smart Control: Achieve the perfect consistency with just a press of a button.", "Compact Yet Powerful: High-efficiency motor delivers fast and uniform chopping.", "Space-Saving Design: Great for small kitchens, dorms, and minimalist setups.", "No More Tears or Smells: Keep your hands free from garlic and onion smells."] },
      { heading: "📦 Package Includes", points: ["1× Mini Electric Chopper", "1× USB Charging Cable (if rechargeable)", "1× User Manual"] },
    ],
    rating: 4.8, reviews: 150, stock: 180, isNew: true, isTopSeller: true,
  },
  // ... Continue with the rest of the products, ensuring all image names are lowercase and correct ...
  // --- PRODUCT 8: Mini Fascial Gun ---
  {
    id: '8',
    name: 'Mini Fascial Gun – Portable Deep Tissue Muscle Massager (Black)',
    slug: 'mini-fascial-gun-massager',
    description: 'Delivers deep tissue relaxation in a lightweight and travel-friendly form for home, office, or post-gym recovery.',
    price: 249,
    originalPrice: 319,
    category: 'Health & Massagers',
    subcategory: 'Massage Guns',
    tags: ['massage gun', 'fascial gun', 'muscle recovery', 'deep tissue', 'portable massager', 'fitness'],
    imageUrl: '/images/mini-fascial-massager1.png',
    images: ['/images/mini-fascial-massager2.png', '/images/mini-fascial-massager3.png'],
    productDetails: [
      { heading: "🔹 Key Features", points: ["Ultra-Compact & Lightweight Design: Fits easily into your handbag, backpack, or desk drawer.", "Quiet but Powerful: Operates at a whisper-quiet level (~45 dB).", "Effective Pain Relief: Target stiff muscles, sore spots, and knots with precision.", "Battery-Powered Convenience: Cordless and rechargeable via USB.", "Boosts Blood Circulation: Helps promote healthy blood flow and supports recovery."] },
      { heading: "📦 What’s in the Box?", points: ["1× Mini Fascial Massage Gun", "1× USB Charging Cable", "User Manual"] },
    ],
    rating: 4.7, reviews: 92, stock: 90, isNew: true,
  },
  // --- PRODUCT 9: Solar Wall Light ---
  {
    id: '9',
    name: 'Solar Wall Light – Motion Sensor LED Outdoor Sconce (Warm Yellow)',
    slug: 'solar-motion-sensor-wall-light',
    description: 'An energy-saving solution for enhancing your outdoor ambiance without wiring or high electricity bills.',
    price: 299,
    originalPrice: 590,
    category: 'Lights & Lamps',
    subcategory: 'Outdoor Lighting',
    tags: ['solar light', 'outdoor light', 'motion sensor', 'wall light', 'garden light', 'waterproof'],
    imageUrl: '/images/solar-light1.png',
    images: ['/images/solar-light2.png', '/images/solar-light3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Solar-Powered & Auto-Chargeable: Automatically charges in daylight and lights up at dark.", "Motion Sensor Activated: Lights up instantly when movement is detected.", "Effortless Wall Mount Installation: Simply mount it on any wall, fence, or gate.", "Waterproof & Weather-Resistant: Built to withstand rain, dust, heat, and cold.", "Warm Yellow Glow: Emits a soft, tungsten-like warm yellow hue."] },
      { heading: "📦 Pack Contains", points: ["1 x Solar Wall Light (Warm Yellow)"] },
    ],
    rating: 4.6, reviews: 75, stock: 250, isNew: true,
  },
  // --- PRODUCT 10: Baby Electric Nail Care Kit ---
  {
    id: '10',
    name: 'Baby Electric Nail Care Kit – Safe Nail Trimmer for Babies & Adults',
    slug: 'baby-electric-nail-trimmer-kit',
    description: 'The safer, smarter, and stress-free way to trim nails for newborns, toddlers, kids, and even adults.',
    price: 349,
    originalPrice: 589,
    category: 'Kids & Baby',
    subcategory: 'Baby Grooming',
    tags: ['baby nail trimmer', 'electric nail file', 'baby care', 'newborn', 'baby shower gift'],
    imageUrl: '/images/baby-nail-trimmer1.png',
    images: ['/images/baby-nail-trimmer2.png', '/images/baby-nail-trimmer3.png', '/images/baby-nail-trimmer4.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Safe & Painless Grinding Technology: No risk of cutting your baby’s soft skin.", "Built-in LED Light: Makes night-time nail care easier and safer.", "One-Button Operation with 4 Modes: Two speeds and two rotation directions.", "6 Replaceable Grinding Heads: Includes soft pads for babies and stronger ones for adults."] },
      { heading: "📦 What’s in the Box?", points: ["1 x Electric Nail Trimmer", "6 x Grinding Pads", "1 x Storage Case", "1 x User Manual"] },
    ],
    rating: 4.9, reviews: 180, stock: 140, isNew: true, isTopSeller: true,
  },
  // --- PRODUCT 11: Mini Bag Sealer ---
  {
    id: '11',
    name: 'Mini Bag Sealer (Upgraded) – 2-in-1 Heat Sealer & Cutter',
    slug: 'mini-bag-sealer-2-in-1',
    description: 'Keep food fresher for longer with this portable, USB rechargeable, and magnetic snack resealer.',
    price: 299,
    originalPrice: 299,
    category: 'Kitchen Equipments',
    subcategory: 'Food Storage',
    tags: ['bag sealer', 'heat sealer', 'kitchen gadget', 'snack sealer', 'portable', 'rechargeable'],
    imageUrl: '/images/packet-sealer1.png',
    images: ['/images/packet-sealer2.png', '/images/packet-sealer3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["2-in-1 Heat Sealer + Bag Cutter: Seal snack bags or open them with the built-in cutter.", "USB Rechargeable & Eco-Friendly: No more replacing batteries.", "Magnetic Back for Easy Storage: Stick the sealer on your refrigerator.", "Compatible with Most Food Storage Bags.", "Quick & Easy Operation: Seals in seconds."] },
      { heading: "📦 Package Includes", points: ["1 x Mini Bag Sealer & Cutter", "1 x USB Charging Cable", "1 x User Manual"] },
    ],
    rating: 4.5, reviews: 60, stock: 300, isNew: true,
  },
  // --- PRODUCT 12: Mini Flashlight ---
  {
    id: '12',
    name: 'Rechargeable Mini Flashlight – 800 Lumens Pocket COB LED',
    slug: 'rechargeable-mini-flashlight-800-lumens',
    description: 'A compact yet powerful mini flashlight with a magnetic base, folding bracket, and bottle opener.',
    price: 230,
    originalPrice: 230,
    category: 'Mobile Accessories',
    subcategory: 'Gadgets',
    tags: ['mini flashlight', 'led keychain', 'cob light', 'rechargeable', 'camping', 'emergency light'],
    imageUrl: '/images/keychain-light1.png',
    images: ['/images/keychain-light2.png', '/images/keychain-light3.png', '/images/keychain-light4.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Super Bright COB LED: Up to 800 Lumens of wide-angle light.", "Magnetic Base + 180° Folding Bracket: Stick it to any metal surface.", "4 Light Modes: High, Low, Strobe, and Max Brightness.", "USB Rechargeable with 500mAh Battery.", "Built-in Bottle Opener & Keychain Clip."] },
      { heading: "📦 Package Includes", points: ["1 x Rechargeable Mini Flashlight", "1 x Micro USB Charging Cable", "1 x Carabiner Clip"] },
    ],
    rating: 4.8, reviews: 210, stock: 160, isNew: true,
  },
  // --- PRODUCT 13: Motion Sensor LED Night Light ---
  {
    id: '13',
    name: 'USB Rechargeable Motion Sensor LED Night Light – Warm White',
    slug: 'motion-sensor-led-night-light',
    description: 'Smart, hands-free illumination where you need it most, for wardrobes, stairs, kitchens, and more.',
    price: 295,
    originalPrice: 429,
    category: 'Lights & Lamps',
    subcategory: 'Smart Lighting',
    tags: ['motion sensor light', 'night light', 'led light', 'wardrobe light', 'rechargeable', 'magnetic'],
    imageUrl: '/images/sensor-light1.png',
    images: ['/images/sensor-light2.png', '/images/sensor-light3.png', '/images/sensor-light4.png', '/images/sensor-light5.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Rechargeable & Long Battery Life: Lasts 25–40 days in auto mode.", "Motion & Light Sensor Technology: Automatically turns on when movement is detected in the dark.", "Bright & Gentle Illumination: 6 high-quality LED beads with warm white light.", "Easy Installation: Magnetic and adhesive, no drilling required.", "Smart Ambient Detection: Only activates in dark environments."] },
      { heading: "📦 What’s in the Box?", points: ["1 x Motion Sensor Night Light", "1 x USB Charging Cable", "1 x Adhesive Magnetic Mount"] },
    ],
    rating: 4.7, reviews: 145, stock: 110, isNew: true,
  },
  // --- PRODUCT 14: USB Star Projector ---
  {
    id: '14',
    name: 'USB Night Light Roof Star Projector – Red',
    slug: 'usb-star-projector-light-red',
    description: 'Create a magical ambiance anywhere with this compact and portable projector for your car, bedroom, or parties.',
    price: 130,
    originalPrice: 130,
    category: 'Car & Bike Accessories',
    subcategory: 'Interior Lights',
    tags: ['star projector', 'usb light', 'car roof light', 'led mood light', 'party light', 'decoration'],
    imageUrl: '/images/star-decoration-lamp1.png',
    images: ['/images/star-decoration-lamp2.png', '/images/star-decoration-lamp3.png', '/images/star-decoration-lamp4.png', '/images/star-decoration-lamp5.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Romantic Starry Effect: Projects mesmerizing star patterns.", "Rotating Projection Head: Easily switch between different patterns.", "Plug & Play USB Powered: No batteries needed.", "Adjustable & Flexible Gooseneck: Bendable neck to adjust the light direction."] },
      { heading: "🏠 Ideal For", points: ["Car interiors", "Bedrooms", "Game rooms", "Parties & Events"] },
    ],
    rating: 4.4, reviews: 80, stock: 400, isNew: true,
  },
  // --- PRODUCT 15: Watercolour Painting Notebook ---
  {
    id: '15',
    name: 'Watercolour Painting Notebook for Kids – 20 Pages + Brush',
    slug: 'watercolour-painting-notebook-kids',
    description: 'A compact and all-in-one coloring kit designed to keep little artists entertained and encourage creativity.',
    price: 219,
    originalPrice: 399,
    category: 'Kids & Baby',
    subcategory: 'Art & Craft',
    tags: ['watercolor book', 'painting kit', 'kids art', 'return gift', 'activity book', 'craft'],
    imageUrl: '/images/paint-book1.png',
    images: ['/images/paint-book2.png', '/images/paint-book3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["All-in-One Painting Kit: Includes 20 pages, a built-in watercolor palette, and 1 paintbrush.", "Mess-Free & Travel-Friendly: Perfect for car rides, flights, or restaurants.", "Thick, Premium Paper Quality: Withstands water without bleeding or tearing.", "Fun & Thematic Designs: Cute animals to dreamy fantasy scenes.", "Educational Benefits: Enhances fine motor skills and color recognition."] },
      { heading: "📦 What’s in the Box?", points: ["1 x Watercolour Notebook (20 Pages)", "1 x Paint Brush", "Built-in Paint Palette"] },
    ],
    rating: 4.8, reviews: 98, stock: 150, isNew: true,
  },
  // --- PRODUCT 16: Magic Water Coloring Books ---
  {
    id: '16',
    name: 'Magic Water Coloring Books – Reusable (Pack of 4)',
    slug: 'magic-water-coloring-books-4-pack',
    description: 'A fun, educational, and completely reusable activity toy that sparks creativity without any mess.',
    price: 196,
    originalPrice: 329,
    category: 'Kids & Baby',
    subcategory: 'Educational Toys',
    tags: ['magic water book', 'reusable coloring', 'mess free', 'toddler toy', 'return gift', 'doodle book'],
    imageUrl: '/images/water-book1.png',
    images: ['/images/water-book2.png', '/images/water-book3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Pack of 4 Unique Books: Each with vibrant illustrations and 1 refillable water pen.", "No Mess, No Stress: Just fill the pen with water and draw. Images disappear after 5-10 minutes.", "Educational & Fun: Introduces numbers, animals, the universe, and more.", "Reusable & Eco-Friendly: Dry and draw endlessly with zero waste.", "Safe & Durable Material: Made from high-quality, tear-resistant paper."] },
      { heading: "📦 What’s Included", points: ["4 x Magic Water Coloring Books", "4 x Refillable Water Pens"] },
    ],
    rating: 4.7, reviews: 165, stock: 120, isNew: true,
  },
  // --- PRODUCT 17: Mini Mop ---
  {
    id: '17',
    name: 'Mini Mop for Kitchen, Floor, & Car – Self-Squeeze Portable Tool',
    slug: 'self-squeeze-mini-mop',
    description: 'A compact and powerful cleaning tool for home and car with self-squeeze technology for hands-free cleaning.',
    price: 297,
    originalPrice: 499,
    category: 'Household Products',
    subcategory: 'Cleaning Tools',
    tags: ['mini mop', 'self squeeze mop', 'portable mop', 'kitchen cleaning', 'car cleaning', 'floor mop'],
    imageUrl: '/images/mini-mop1.png',
    images: ['/images/mini-mop2.png', '/images/mini-mop3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["2 Sponge Heads + 1 Squeeze Handle: Double the life and value.", "Durable ABS + Sponge Material: Tough on stains but gentle on surfaces.", "Effortless Self-Squeeze Technology: No mess, no wet hands.", "Compact & Foldable Design: Ideal for storage in tight spaces.", "Wet & Dry Dual Use: Handles spilled water, dry dust, grease, and grime.", "360° Versatile Cleaning: For floors, glass, tiles, windows, cars, and more."] },
      { heading: "📦 What’s Included", points: ["1 x Self-Squeeze Handle", "2 x Replaceable Sponge Mop Heads"] },
    ],
    rating: 4.5, reviews: 115, stock: 180, isNew: true,
  },
  // --- PRODUCT 18: Stick Tap Touch Lamp ---
  {
    id: '18',
    name: 'Battery Powered Wireless Stick Tap Touch Lamp (Pack of 2)',
    slug: 'stick-tap-touch-lamp-2-pack',
    description: 'Add bright, efficient lighting anywhere in seconds, perfect for closets, cabinets, and utility rooms.',
    price: 120,
    originalPrice: 299,
    category: 'Lights & Lamps',
    subcategory: 'Cabinet Lights',
    tags: ['touch lamp', 'stick on light', 'led tap light', 'closet light', 'cabinet light', 'battery powered'],
    imageUrl: '/images/touch-lamp1.png',
    images: ['/images/touch-lamp2.png', '/images/touch-lamp3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Tap to Light: Easily turn on/off by pressing the top.", "Bright & Energy-Efficient LED: 3 ultra-bright white LED bulbs with a long lifespan.", "Strong Adhesive: Sticks securely to most surfaces like wood, glass, or metal.", "Battery Powered: Cordless convenience, powered by 3 AAA batteries (not included).", "Convenient 2-Pack: Place them in multiple rooms or use one as a backup."] },
      { heading: "🛠 Recommended Use", points: ["Closets & Wardrobes", "Kitchen Cabinets", "Staircases & Hallways", "Night Light for Kids or Elderly"] },
    ],
    rating: 4.3, reviews: 190, stock: 350, isNew: true,
  },
  // --- PRODUCT 19: Coffee Beater ---
  {
    id: '19',
    name: 'Electric Beater Mini Handheld Coffee & Milk Frother',
    slug: 'electric-handheld-coffee-frother',
    description: 'Whip up barista-style coffee or blend your favorite drinks with ease using this mini electric handheld beater.',
    price: 167,
    originalPrice: 349,
    category: 'Kitchen Equipments',
    subcategory: 'Beverage Tools',
    tags: ['coffee frother', 'milk frother', 'electric beater', 'handheld mixer', 'cappuccino', 'kitchen gadget'],
    imageUrl: '/images/coffee-beater1.png',
    images: ['/images/coffee-beater2.png', '/images/coffee-beater3.png'],
    productDetails: [
      { heading: "✅ Key Features", points: ["Effortless Mixing & Frothing: Ideal for frothing milk, mixing coffee, beating eggs, or stirring drinks.", "Durable Build: Stainless steel spiral whisk head and a sturdy plastic handle.", "Battery Operated for Portability: Powered by 2 x AA batteries (not included).", "Compact Design: Fits easily in drawers or kitchen containers."] },
      { heading: "☕ Perfect For", points: ["Frothing milk for latte & cappuccino", "Mixing protein shakes", "Beating eggs", "Stirring juices and teas"] },
    ],
    rating: 4.6, reviews: 250, stock: 220, isNew: true, isTopSeller: true,
  },
];

// --- YOUR TESTIMONIALS (UNTOUCHED) ---
export const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Aarav Sharma', quote: 'Whim & Wonder has the most unique gadgets! My kitchen has never been more efficient. The quality is fantastic.', imageUrl: 'https://i.pravatar.cc/100?u=aarav', rating: 5 },
  { id: '2', name: 'Ishaan Patel', quote: 'Found the perfect gifts for my family here. The smart home hub is a game-changer. Fast shipping too!', imageUrl: 'https://i.pravatar.cc/100?u=ishaan', rating: 4 },
  { id: '3', name: 'Diya Gupta', quote: 'I redecorated my living room with items from Whim & Wonder. The cozy blanket is my favorite. Highly recommend!', imageUrl: 'https://i.pravatar.cc/100?u=diya', rating: 5 },
  { id: '4', name: 'Sneha Patel', quote: 'Absolutely love the innovative products. Fast delivery and great support too!', imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 4.5 },
  { id: '5', name: 'Rohan Mehta', quote: 'Perfect place for quirky yet useful items. Will shop again!', imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg', rating: 4 },
  { id: '6', name: 'Ishita Verma', quote: 'Amazing quality and packaging. The product made my life easier!', imageUrl: 'https://i.pinimg.com/564x/38/8e/b2/388eb2b89365e6be807c5302c9ea21e3.jpg', rating: 5 },
];

// --- YOUR ROUTE PATHS (UNTOUCHED) ---
export const ROUTE_PATHS = { HOME: '/', PRODUCTS: '/products', PRODUCT_DETAIL: '/product/:slug', CART: '/cart', CHECKOUT: '/checkout', ORDER_CONFIRMATION: '/order-confirmation', LOGIN: '/login', REGISTER: '/register', ACCOUNT: '/account', ORDER_HISTORY: '/account/orders', WISHLIST: '/account/wishlist', PROFILE_SETTINGS: '/account/profile', CONTACT_US: '/contact', PRIVACY_POLICY: '/privacy-policy', REFUND_POLICY: '/refund-policy', SHIPPING_POLICY: '/shipping-policy', ADMIN_DASHBOARD: '/admin' };