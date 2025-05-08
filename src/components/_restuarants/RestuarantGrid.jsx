import React from 'react';

const RestaurantGrid = () => {
  const filters = [
    { label: "All Restaurants", active: true },
    { label: "Free Delivery", active: false },
    { label: "Under 30 min", active: false },
    { label: "Price: $", active: false },
    { label: "Price: $$", active: false },
    { label: "Price: $$$", active: false },
    { label: "Highly Rated", active: false }
  ];

  const restaurants = [
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

  return (
    <section id="restaurant-grid" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Restaurants</h2>
            <p className="text-gray-400">Discover restaurants that deliver to your doorstep</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="relative mr-4">
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>New York, NY</span>
                <svg className="ml-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <div className="relative mr-4">
              <select className="appearance-none bg-gray-800 border border-gray-700 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-300">
                <option>Sort by: Recommended</option>
                <option>Fastest Delivery</option>
                <option>Rating</option>
                <option>Distance</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <button className="bg-gray-800 p-2 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Filter Pills */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-3 mb-8 scrollbar-hide">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap ${
                filter.active 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-700 transition-all duration-300 hover:shadow-md group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
                <button className="absolute top-4 right-4 bg-gray-800 rounded-full p-2 shadow-sm opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                {restaurant.badge && (
                  <div className={`absolute bottom-4 left-4 ${restaurant.badge.color} text-white px-2 py-1 rounded-md text-sm font-medium`}>
                    {restaurant.badge.text}
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{restaurant.name}</h3>
                  <div className="flex items-center bg-green-900 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-green-300">{restaurant.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <span className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {restaurant.deliveryTime}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {restaurant.distance}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Min. order: {restaurant.minOrder}</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantGrid;