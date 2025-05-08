import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-orange-400">FoodDelivery</a>
            </div>
            <p className="text-gray-300 mb-6">
              Delicious food delivered to your doorstep, fast and fresh.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477..." clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0..." clipRule="evenodd" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Contact", "Terms & Conditions", "Privacy Policy", "FAQ", "Careers"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26..." />
                </svg>
                <span className="text-gray-300">support@fooddelivery.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28..." />
                </svg>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3..." />
                </svg>
                <span className="text-gray-300">Mon-Sun: 8:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest offers and promotions.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 rounded-xl p-6 mb-12">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-xl font-bold text-white mb-2">Download Our Mobile App</h3>
            <p className="text-gray-300 mb-4">Get exclusive offers and order on the go!</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.707,9.293l-5-5c-0.391-0.391-1.023-0.391-1.414,0l-5,5C5.898,9.684,6.157,10,6.5,10H10v7.5..." />
                  <path d="M19,21H5c-1.103,0-2-0.897-2-2V5c0-1.103..." />
                </svg>
                App Store
              </a>
              <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  {/* Add your Play Store icon here */}
                </svg>
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
