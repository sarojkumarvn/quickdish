import { useState } from 'react';

const NavBar = ({ headerNav = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" mx-auto px-4 py-4 bg-neutral-700 w-full">
      <div className="flex justify-between items-center mx-20">
     
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-orange-400" target="_self">
            QuickDish
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {headerNav.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              className="font-DM Sans text-neutral-300 hover:text-orange-400 transition-colors duration-300"
              target="_self"
            >
              {item.label}
            </a>
          ))}
          
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your address"
              className="px-5 py-2 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
            Order Now
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-neutral-300 focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-2`}>
        <nav className="flex flex-col space-y-3">
          {headerNav.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              className="font-DM Sans text-neutral-300 hover:text-orange-400 transition-colors duration-300"
              target="_self"
            >
              {item.label}
            </a>
          ))}
          
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full px-5 py-2 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 w-full mt-2">
            Order Now
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;