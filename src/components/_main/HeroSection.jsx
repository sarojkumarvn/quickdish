import React from 'react';

const HeroSection = () => {
  const foodCategories = [
    { name: "All", active: true },
    { name: "Pizza", active: false },
    { name: "Burgers", active: false },
    { name: "Sushi", active: false },
    { name: "Italian", active: false },
    { name: "Chinese", active: false },
    { name: "Mexican", active: false }
  ];

  return (
    <div className="relative overflow-hidden bg-neutral-900">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4">
            Delicious Food <br />
            <span className="text-orange-500">Delivered Fast</span>
          </h1>
          <p className="text-neutral-400 text-lg mb-8">
            Order from your favorite restaurants and enjoy contactless delivery right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
            onClick={() => {
              
            }}
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center">
              Find Food
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1464306208223-e0b4495a5553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWluaW1hbGlzdCUyMGZvb2QlMjBkZWxpdmVyeSUyMHdlYnNpdGUlMjBoZWFkZXJ8ZW58MHx8fHwxNzQ2NjM2ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Fancy breakfast" 
            className="rounded-lg shadow-lg w-full h-auto object-cover" 
            loading="eager" 
            width="540" 
            height="360" 
          />
          <div className="absolute -bottom-4 -left-4 bg-neutral-800 p-4 rounded-lg shadow-md hidden md:block">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-200">Order Delivered</p>
                <p className="text-xs text-neutral-400">25 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Food Category Pills */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {foodCategories.map((category, index) => (
            <button 
              key={index}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                category.active 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;