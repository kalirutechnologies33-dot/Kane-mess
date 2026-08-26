export const COMPANY_INFO = {
  name: "Kane Mess",
  tagline: "Authentic Taste, Uncompromising Quality.",
  subTagline: "Experience the finest hotel mess catering, delivered fresh and on time.",
  phone: "+91 63749 31454",
  phoneRaw: "+916374931454",
  whatsappUrl: "https://wa.me/916374931454?text=Hello%20Kane%20Mess,%20I%20would%20like%20to%20inquire%20about%20your%20catering%20and%20mess%20services.",
  address: "Kandampalayam Highway, Namakkal",
  email: "orders@kanemess.com",
  operatingHours: "Mon - Sun: 7:00 AM - 10:30 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=11.2707184,77.9467251",
  googleMapsEmbed: "https://maps.google.com/maps?q=11.2707184,77.9467251(Kane%20Mess)&hl=en&z=17&output=embed"
};

export const PROMISES = [
  {
    id: "quality",
    title: "Premium Quality",
    subtitle: "Farm-Fresh & Pure",
    icon: "ShieldCheck",
    description: "We strictly select high-grade, organic spices, cold-pressed oils, and farm-fresh produce daily. Every dish follows time-honored authentic recipes crafted under stringent zero-compromise hygiene protocols.",
    highlights: [
      "100% natural spices with no artificial preservatives",
      "Sanitized commercial kitchen with daily safety audits",
      "Traditional homestyle gravies and wood-fire aroma"
    ],
    badge: "Hygiene Certified A+"
  },
  {
    id: "timely",
    title: "Timely Service",
    subtitle: "Precision Hot Delivery",
    icon: "Clock",
    description: "Punctuality is woven into our kitchen operations. Using smart batch scheduling and temperature-insulated transit pods, we ensure your feast arrives piping hot, aromatic, and exactly at the promised minute.",
    highlights: [
      "Guaranteed 30-min window for daily meal dispatches",
      "Dedicated logistics team for large wedding & event buffets",
      "Live order updates & transparent delivery tracking"
    ],
    badge: "100% On-Time Guarantee"
  }
];

export const SERVICES = [
  {
    id: "catering",
    title: "Function & Event Catering",
    tag: "Weddings • Birthdays • Corporate",
    icon: "UtensilsCrossed",
    description: "From intimate celebrations to grand weddings and high-profile corporate galas (50 to 2,000+ guests), we engineer an unforgettable dining experience. Fully customized multi-course menus, live counters, and dedicated banquet service staff.",
    features: [
      "Customizable vegetarian & non-vegetarian culinary spreads",
      "Live tandoor, dosa, and dessert counters",
      "Professional uniform-clad service staff and banquet setup",
      "Tasting sessions available upon reservation"
    ],
    ctaText: "Book a Function",
    modalAction: "catering"
  },
  {
    id: "delivery",
    title: "Home Delivery & Mess Subscriptions",
    tag: "Daily Homestyle Meals",
    icon: "Truck",
    description: "Enjoy restaurant-grade, balanced, wholesome meals delivered straight to your home or office desk every single day. Choose from flexible daily, weekly, or monthly subscription plans with zero hassle.",
    features: [
      "Piping hot, spill-proof eco-friendly compartmentalized packaging",
      "Rotating dynamic weekly menu — never eat the same meal twice",
      "Skip, pause, or reschedule meals anytime via instant WhatsApp/call",
      "Special dietary custom options available (low-oil, diabetic-friendly)"
    ],
    ctaText: "Explore Meal Plans",
    modalAction: "delivery"
  }
];

export const MENU_ITEMS = [
  {
    category: "Signature Thali",
    name: "Royal Kane Grand Thali",
    price: "₹180",
    tag: "Chef's Special",
    desc: "Steaming Basmati rice, slow-cooked dal makhani, paneer butter masala, 3 butter rotis, seasonal vegetable dry curry, crisp papad, raita & sweet payasam.",
    isVeg: true
  },
  {
    category: "Signature Thali",
    name: "Special South Homestyle Feast",
    price: "₹140",
    tag: "Daily Favorite",
    desc: "Aromatic Ponni boiled rice, sambar, rasam, kootu, poriyal, curd, appalam, fresh pickle, and soothing spiced buttermilk.",
    isVeg: true
  },
  {
    category: "Event Catering",
    name: "Banquet Feast Spread",
    price: "Custom per plate",
    tag: "Events & Functions",
    desc: "Multi-course gourmet extravaganza with welcome drinks, starters, live counters, authentic biryani, traditional curries, breads, sweets & ice cream.",
    isVeg: false
  },
  {
    category: "Daily Mess",
    name: "Monthly Executive Lunch Box",
    price: "₹3,200 / month",
    tag: "Popular Plan",
    desc: "26 healthy, nutritious lunch deliveries crafted for working professionals. Balanced proteins, low-sodium, delivered right to your office on time.",
    isVeg: true
  }
];

export const STATS = [
  { value: "15+", label: "Years of Culinary Heritage" },
  { value: "500k+", label: "Meals Served with Love" },
  { value: "99.8%", label: "Punctual Delivery Rate" },
  { value: "4.9 ★", label: "Customer Satisfaction" }
];
