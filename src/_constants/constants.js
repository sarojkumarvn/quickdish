const categories = [
    {
      name: "Breakfast",
      image: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Lunch",
      image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Bakery",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Fruits",
      image: "https://images.unsplash.com/photo-1487376480913-24046456a727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Drinks",
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Cakes",
      image: "https://images.unsplash.com/photo-1487790343276-2fe56a7d9439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Berries",
      image: "https://images.unsplash.com/photo-1469547371150-47620ed0c5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Baking",
      image: "https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OXx8bWluaW1hbGlzdCUyMGZvb2QlMjBjYXRlZ29yeSUyMGljb25zfGVufDB8fHx8MTc0NjYzNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Organic",
      image: "https://images.unsplash.com/photo-1524222717473-730000096953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTB8fG1pbmltYWxpc3QlMjBmb29kJTIwY2F0ZWdvcnklMjBpY29uc3xlbnwwfHx8fDE3NDY2MzY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dinner",
      image: "https://images.unsplash.com/photo-1524222717473-730000096953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTB8fG1pbmltYWxpc3QlMjBmb29kJTIwY2F0ZWdvcnklMjBpY29uc3xlbnwwfHx8fDE3NDY2MzY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];
  export default categories;


  export const restaurants = [
    {
      id: 1,
      name: "The Rustic Table",
      image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dXBzY2FsZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMHdpdGglMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzQ2NjM3MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      tags: ["Italian", "Fine Dining", "$$$$"],
      deliveryTime: "25-35 min",
      minOrder: "$25",
      badge: {
        text: "Premium",
        color: "bg-orange-500"
      }
    },
    {
      id: 2,
      name: "Green Garden",
      image: "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dXBzY2FsZSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMHdpdGglMjBhbWJpZW50JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzQ2NjM3MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      tags: ["Vegetarian", "Healthy", "$$$"],
      deliveryTime: "20-30 min",
      minOrder: "$20",
      badge: {
        text: "Organic",
        color: "bg-green-500"
      }
    },
    {
      id: 3,
      name: "Fusion Bistro",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      rating: 4.5,
      tags: ["Asian Fusion", "Contemporary", "$$$$"],
      deliveryTime: "30-45 min",
      minOrder: "$30",
      badge: {
        text: "New",
        color: "bg-blue-500"
      }
    }
  ];
   export const restaurantsgrid = [
    {
      id: 1,
      name: "Skyline Bistro",
      image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8YXBwZXRpemluZyUyMHJlc3RhdXJhbnQlMjBzdG9yZWZyb250JTIwbW9kZXJufGVufDB8fHx8MTc0NjYzNzE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      deliveryTime: "20-30 min",
      distance: "0.8 miles",
      tags: ["Modern", "American", "$$$"],
      minOrder: "$15",
      badge: {
        text: "Free Delivery",
        color: "bg-green-500"
      }
    },
    {
      id: 2,
      name: "Cozy Cafe",
      image: "https://images.unsplash.com/photo-1415226581130-91cb7f52f078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8YXBwZXRpemluZyUyMHJlc3RhdXJhbnQlMjBzdG9yZWZyb250JTIwbW9kZXJufGVufDB8fHx8MTc0NjYzNzE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.6,
      deliveryTime: "15-25 min",
      distance: "1.2 miles",
      tags: ["Cafe", "Breakfast", "$$"],
      minOrder: "$10",
      badge: {
        text: "Popular",
        color: "bg-blue-500"
      }
    }
  ];

