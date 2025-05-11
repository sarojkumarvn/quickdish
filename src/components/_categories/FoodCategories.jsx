import React from 'react';
import categories from '../../_constants/constants';

const FoodCategories = () => {
 
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