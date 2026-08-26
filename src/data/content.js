export const COMPANY_INFO = {
  name: "Kane Mess",
  tagline: "Authentic Taste, Uncompromising Quality.",
  subTagline: "Experience the finest hotel mess catering, delivered fresh and on time.",
  phone: "+91 63749 31454",
  phoneRaw: "+916374931454",
  address: "Kandampalayam Highway, Namakkal",
  email: "orders@kanemess.com",
  operatingHours: "Mon - Sun: 7:00 AM - 10:30 PM",
  mapsUrl: "https://maps.google.com/?q=Kandampalayam+Highway,+Namakkal",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8953158019316!2d77.989047!3d11.306059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96144e55e08b1%3A0x2ff8570220cbba0e!2sKandampalayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
    price: "$14.99",
    tag: "Chef's Special",
    desc: "Steaming Basmati rice, slow-cooked dal makhani, paneer butter masala, 3 butter rotis, seasonal vegetable dry curry, crisp papad, raita & gulab jamun.",
    isVeg: true
  },
  {
    category: "Signature Thali",
    name: "Special Homestyle Feast",
    price: "$11.99",
    tag: "Daily Favorite",
    desc: "Wholesome yellow tadka dal, seasonal subzi, phulkas with pure desi ghee, jeera rice, fresh pickle, and soothing spiced buttermilk.",
    isVeg: true
  },
  {
    category: "Event Catering",
    name: "Banquet Feast Spread",
    price: "Custom per plate",
    tag: "Events & Functions",
    desc: "Multi-course gourmet extravaganza with 4 welcome drinks, 6 starters, 8 main dishes, artisan breads, live dessert stations, and signature paan.",
    isVeg: false
  },
  {
    category: "Daily Mess",
    name: "Monthly Executive Lunch Box",
    price: "$180 / month",
    tag: "Popular Plan",
    desc: "26 healthy, nutritious lunch deliveries crafted for working professionals. Balanced proteins, low-sodium, delivered right to your office by 12:45 PM.",
    isVeg: true
  }
];

export const STATS = [
  { value: "15+", label: "Years of Culinary Heritage" },
  { value: "500k+", label: "Meals Served with Love" },
  { value: "99.8%", label: "Punctual Delivery Rate" },
  { value: "4.9 ★", label: "Customer Satisfaction" }
];
