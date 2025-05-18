const categories = [
  {
    name: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Lunch",
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Bakery",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Fruits",
    image:
      "https://images.unsplash.com/photo-1487376480913-24046456a727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Cakes",
    image:
      "https://images.unsplash.com/photo-1487790343276-2fe56a7d9439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Berries",
    image:
      "https://images.unsplash.com/photo-1469547371150-47620ed0c5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Baking",
    image:
      "https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OXx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Organic",
    image:
      "https://images.unsplash.com/photo-1524222717473-730000096953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTB8fG1pbmltYWxpc3QlMjBmb29kJTIwY2F0ZWdvcnklMjBpY29uc3xlbnwwfHx8fDE3NDY2MzY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Dinner",
    image:
      "https://images.unsplash.com/photo-1524222717473-730000096953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTB8fG1pbmltYWxpc3QlMjBmb29kJTIwY2F0ZWdvcnklMjBpY29uc3xlbnwwfHx8fDE3NDY2MzY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
export default categories;

export const restaurants = [
  {
    id: 1,
    name: "The Rustic Table",
    image:
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dXBzY2FsZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMHdpdGglMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzQ2NjM3MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    tags: ["Italian", "Fine Dining", "$$$$"],
    deliveryTime: "25-35 min",
    minOrder: "$25",
    badge: {
      text: "Premium",
      color: "bg-orange-500",
    },
  },
  {
    id: 2,
    name: "Green Garden",
    image:
      "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dXBzY2FsZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMHdpdGglMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzQ2NjM3MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    tags: ["Vegetarian", "Healthy", "$$$"],
    deliveryTime: "20-30 min",
    minOrder: "$20",
    badge: {
      text: "Organic",
      color: "bg-green-500",
    },
  },
  {
    id: 3,
    name: "Fusion Bistro",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    rating: 4.5,
    tags: ["Asian Fusion", "Contemporary", "$$$$"],
    deliveryTime: "30-45 min",
    minOrder: "$30",
    badge: {
      text: "New",
      color: "bg-blue-500",
    },
  },
];
export const restaurantsgrid = [
  [
    {
      id: 1,
      name: "Skyline Bistro",
      image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?...",
      rating: 4.8,
      deliveryTime: "20-30 min",
      distance: "0.8 miles",
      tags: ["Modern", "American", "₹₹₹"],
      minOrder: "₹1200",
      badge: { text: "Free Delivery", color: "bg-green-500" },
      path: "/ordernow",
    },
    {
      id: 2,
      name: "Crimson Curry",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80",
      rating: 4.6,
      deliveryTime: "25-35 min",
      distance: "1.2 miles",
      tags: ["Indian", "Spicy", "₹₹"],
      minOrder: "₹800",
      badge: { text: "Hot Deal", color: "bg-red-500" },
      path: "/ordernow",
    },
    {
      id: 3,
      name: "Green Leaf Garden",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80",
      rating: 4.4,
      deliveryTime: "30-40 min",
      distance: "2.0 miles",
      tags: ["Vegetarian", "Healthy", "₹"],
      minOrder: "₹500",
      badge: { text: "Top Rated", color: "bg-blue-500" },
      path: "/ordernow",
    },
    {
      id: 4,
      name: "The Rolling Rice",
      image:
        "https://images.unsplash.com/photo-1585238341986-5a1f21b55967?q=80",
      rating: 4.7,
      deliveryTime: "15-25 min",
      distance: "1.0 miles",
      tags: ["Japanese", "Sushi", "₹₹₹"],
      minOrder: "₹1600",
      badge: { text: "New Arrival", color: "bg-purple-500" },
      path: "/ordernow",
    },
    {
      id: 5,
      name: "Fiesta Mexicana",
      image:
        "https://images.unsplash.com/photo-1601924582975-4f1613aa3a1f?q=80",
      rating: 4.5,
      deliveryTime: "20-30 min",
      distance: "1.4 miles",
      tags: ["Mexican", "Street Food", "₹₹"],
      minOrder: "₹1000",
      badge: { text: "Popular", color: "bg-yellow-500" },
      path: "/ordernow",
    },
    {
      id: 6,
      name: "Burger Zone",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80",
      rating: 4.2,
      deliveryTime: "10-20 min",
      distance: "0.5 miles",
      tags: ["Fast Food", "Burgers", "₹"],
      minOrder: "₹400",
      badge: { text: "Value Deal", color: "bg-orange-500" },
      path: "/ordernow",
    },
    {
      id: 7,
      name: "Tandoori Flame",
      image:
        "https://images.unsplash.com/photo-1625948964384-56bba7cbbf79?q=80",
      rating: 4.6,
      deliveryTime: "30-40 min",
      distance: "1.9 miles",
      tags: ["Indian", "Grill", "₹₹"],
      minOrder: "₹1400",
      badge: { text: "Chef's Choice", color: "bg-pink-500" },
      path: "/ordernow",
    },
    {
      id: 8,
      name: "Dragon Bowl",
      image:
        "https://images.unsplash.com/photo-1571091655789-005b3f99b74b?q=80",
      rating: 4.3,
      deliveryTime: "20-30 min",
      distance: "1.3 miles",
      tags: ["Asian", "Fusion", "₹₹"],
      minOrder: "₹1000",
      badge: { text: "New", color: "bg-indigo-500" },
      path: "/ordernow",
    },
    {
      id: 9,
      name: "Urban Pizza Co.",
      image:
        "https://images.unsplash.com/photo-1601924579461-d1bd6fe2d86d?q=80",
      rating: 4.1,
      deliveryTime: "25-35 min",
      distance: "1.5 miles",
      tags: ["Pizza", "Italian", "₹₹"],
      minOrder: "₹1100",
      badge: { text: "Buy 1 Get 1", color: "bg-teal-500" },
      path: "/ordernow",
    },
    {
      id: 10,
      name: "Sea Breeze Deli",
      image:
        "https://images.unsplash.com/photo-1585238341986-5a1f21b55967?q=80",
      rating: 4.5,
      deliveryTime: "20-30 min",
      distance: "0.9 miles",
      tags: ["Seafood", "Delicatessen", "₹₹₹"],
      minOrder: "₹1800",
      badge: { text: "Premium", color: "bg-gray-600" },
      path: "/ordernow",
    },
    {
      id: 11,
      name: "Midnight Munchies",
      image:
        "https://images.unsplash.com/photo-1572058166184-75f6f00ef75b?q=80",
      rating: 4.0,
      deliveryTime: "10-15 min",
      distance: "0.6 miles",
      tags: ["Snacks", "Late Night", "₹"],
      minOrder: "₹500",
      badge: { text: "Open Late", color: "bg-violet-600" },
      path: "/ordernow",
    },
    {
      id: 12,
      name: "Trattoria Bella",
      image:
        "https://images.unsplash.com/photo-1580910051073-d77b6992b2d3?q=80",
      rating: 4.7,
      deliveryTime: "30-45 min",
      distance: "2.3 miles",
      tags: ["Italian", "Pasta", "₹₹₹"],
      minOrder: "₹2000",
      badge: { text: "Romantic", color: "bg-rose-400" },
      path: "/ordernow",
    },
    {
      id: 13,
      name: "Waffle Stop",
      image:
        "https://images.unsplash.com/photo-1600891963938-cbaffc156fda?q=80",
      rating: 4.3,
      deliveryTime: "15-20 min",
      distance: "1.1 miles",
      tags: ["Breakfast", "Desserts", "₹"],
      minOrder: "₹600",
      badge: { text: "Sweet Deal", color: "bg-yellow-400" },
      path: "/ordernow",
    },
    {
      id: 14,
      name: "Zen Garden",
      image:
        "https://images.unsplash.com/photo-1603398399828-5e7305a0b6f5?q=80",
      rating: 4.8,
      deliveryTime: "20-30 min",
      distance: "1.6 miles",
      tags: ["Vegan", "Organic", "₹₹"],
      minOrder: "₹900",
      badge: { text: "Healthy Pick", color: "bg-green-400" },
      path: "/ordernow",
    },
    {
      id: 15,
      name: "BBQ Yard",
      image:
        "https://images.unsplash.com/photo-1579884093490-03844bfa9385?q=80",
      rating: 4.6,
      deliveryTime: "25-35 min",
      distance: "2.1 miles",
      tags: ["Barbecue", "Meat Lovers", "₹₹₹"],
      minOrder: "₹1600",
      badge: { text: "Smoked Special", color: "bg-orange-600" },
      path: "/ordernow",
    },
    {
      id: 16,
      name: "The Dumpling Den",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80",
      rating: 4.4,
      deliveryTime: "20-25 min",
      distance: "1.0 miles",
      tags: ["Chinese", "Dumplings", "₹₹"],
      minOrder: "₹1100",
      badge: { text: "Crowd Favorite", color: "bg-blue-600" },
      path: "/ordernow",
    },
    {
      id: 17,
      name: "Falafel Town",
      image:
        "https://images.unsplash.com/photo-1603048299793-6a1b063f6e0a?q=80",
      rating: 4.3,
      deliveryTime: "15-25 min",
      distance: "0.7 miles",
      tags: ["Middle Eastern", "Vegan", "₹"],
      minOrder: "₹700",
      badge: { text: "Local Gem", color: "bg-amber-500" },
      path: "/ordernow",
    },
    {
      id: 18,
      name: "Sakura Express",
      image: "https://images.unsplash.com/photo-1553621042-2c6e23f0b52d?q=80",
      rating: 4.7,
      deliveryTime: "20-30 min",
      distance: "1.3 miles",
      tags: ["Japanese", "Ramen", "₹₹"],
      minOrder: "₹1200",
      badge: { text: "Seasonal Special", color: "bg-red-400" },
      path: "/ordernow",
    },
    {
      id: 19,
      name: "Balkan Bites",
      image:
        "https://images.unsplash.com/photo-1601924579721-f98d0e1ef2ec?q=80",
      rating: 4.5,
      deliveryTime: "30-40 min",
      distance: "2.2 miles",
      tags: ["European", "Grill", "₹₹"],
      minOrder: "₹1300",
      badge: { text: "Hidden Gem", color: "bg-cyan-500" },
      path: "/ordernow",
    },
    {
      id: 20,
      name: "Pho Corner",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80",
      rating: 4.6,
      deliveryTime: "25-30 min",
      distance: "1.8 miles",
      tags: ["Vietnamese", "Noodles", "₹₹"],
      minOrder: "₹1100",
      badge: { text: "Warm & Cozy", color: "bg-lime-500" },
      path: "/ordernow",
    },
    {
      id: 21,
      name: "Toast & Brew",
      image:
        "https://images.unsplash.com/photo-1603052875633-bf3b6e8d83c3?q=80",
      rating: 4.4,
      deliveryTime: "15-20 min",
      distance: "0.9 miles",
      tags: ["Cafe", "Brunch", "₹₹"],
      minOrder: "₹800",
      badge: { text: "Morning Favorite", color: "bg-sky-500" },
      path: "/ordernow",
    },
  ],
];

export const offers = [
  {
    id: 1,
    title: "Breakfast Combo",
    description: "Start your day with our delicious breakfast combo",
    price: "$9.99",
    badge: "50% OFF",
    badgeColor: "bg-red-500",
    buttonText: "Order Now",
    buttonColor: "bg-red-500",
    image:
      "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Zm9vZCUyMGRlbGl2ZXJ5JTIwc3BlY2lhbCUyMG9mZmVyJTIwYmFubmVyfGVufDB8fHx8MTc0NjYzNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Free delivery on all orders over $25",
    price: "$25.00",
    badge: "FREE DELIVERY",
    badgeColor: "bg-blue-500",
    buttonText: "Claim Offer",
    buttonColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5JTIwc3BlY2lhbCUyMG9mZmVyJTIwYmFubmVyfGVufDB8fHx8MTc0NjYzNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Ice Cream Deal",
    description: "Buy one ice cream and get one free",
    price: "$5.99",
    badge: "BUY 1 GET 1",
    badgeColor: "bg-purple-500",
    buttonText: "Get Deal",
    buttonColor: "bg-purple-500",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Zm9vZCUyMGRlbGl2ZXJ5JTIwc3BlY2lhbCUyMG9mZmVyJTIwYmFubmVyfGVufDB8fHx8MTc0NjYzNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Healthy Salads",
    description: "Fresh and healthy salads at 20% off",
    price: "$7.99",
    badge: "20% OFF",
    badgeColor: "bg-green-500",
    buttonText: "Order Salad",
    buttonColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8Zm9vZCUyMGRlbGl2ZXJ5JTIwc3BlY2lhbCUyMG9mZmVyJTIwYmFubmVyfGVufDB8fHx8MTc0NjYzNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Family Bundle",
    description: "Perfect meal bundle for the whole family",
    price: "$29.99",
    badge: "30% OFF",
    badgeColor: "bg-amber-500",
    buttonText: "View Bundle",
    buttonColor: "bg-amber-500",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8Zm9vZCUyMGRlbGl2ZXJ5JTIwc3BlY2lhbCUyMG9mZmVyJTIwYmFubmVyfGVufDB8fHx8MTc0NjYzNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Fresh Fruit Box",
    description: "Seasonal fruits delivered fresh to you",
    price: "$15.00",
    badge: "SPECIAL",
    badgeColor: "bg-indigo-500",
    buttonText: "Order Now",
    buttonColor: "bg-indigo-500",
    image:
      "https://images.unsplash.com/photo-1487376480913-24046456a727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8Zm9vZCUyMGRlbGl2ZXJ5JTIwc3BlY2lhbCUyMG9mZmVyJTIwYmFubmVyfGVufDB8fHx8MTc0NjYzNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
