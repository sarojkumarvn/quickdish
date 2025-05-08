import React from 'react';

const FoodCategories = () => {
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

  return (
    <section id="categories" className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Categories</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Explore our wide variety of cuisines and food categories to satisfy any craving
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-neutral-800 rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-semibold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;