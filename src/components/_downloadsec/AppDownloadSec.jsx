import React from "react";

const DownloadAppSection = () => {
  return (
    <section id="download-app" className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl font-bold mb-4">Get The App</h2>
            <p className="text-neutral-300 mb-8 text-lg">
              We will send you a link, open it on your phone to download the app
            </p>

            <div className="flex mb-6">
              <button className="bg-white text-black px-6 py-3 rounded-lg mr-4 font-medium">
                Email
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium">
                Phone
              </button>
            </div>

            <input
              type="text"
              placeholder="email@example.com"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 mb-6 text-white"
            />

            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300 mb-8">
              Share App Link
            </button>

            <div className="flex items-center">
              <p className="text-neutral-400 mr-4">Download App from</p>
              <a href="#" className="mr-4">
                <img
                  src="https://dms.mydukaan.io/original/webp/media/4b71a76c-6219-48e7-afa5-d0ea16187e96.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a href="#">
                <img
                  src="https://dms.mydukaan.io/original/webp/media/4b71a76c-6219-48e7-afa5-d0ea16187e96.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 relative">
            <div className="mx-auto max-w-xs z-10 relative">
              <div className="rounded-3xl border-8 border-neutral-700 bg-neutral-800 overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1080"
                  alt="Food App UI"
                  className="w-full"
                  loading="lazy"
                />
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs opacity-75">Delivery in</div>
                      <div className="font-semibold">20–30 min</div>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Images */}
            <div className="absolute top-1/4 -left-4 md:left-8 hidden md:block max-w-xs transform -rotate-12 z-0">
              <div className="rounded-3xl border-8 border-neutral-700 bg-neutral-800 overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?auto=format&fit=crop&w=1080"
                  alt="Food Selection UI"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute top-1/3 -right-4 md:right-8 hidden md:block max-w-xs transform rotate-12 z-0">
              <div className="rounded-3xl border-8 border-neutral-700 bg-neutral-800 overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1483918793747-5adbf82956c4?auto=format&fit=crop&w=1080"
                  alt="Smoothie Order UI"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-neutral-800 rounded-2xl p-8 shadow-sm">
          <div className="md:flex items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-2">What Our Users Say</h3>
              <p className="text-neutral-400">
                Join thousands of satisfied customers who love our app.
              </p>
              <div className="mt-6 flex text-yellow-400 space-x-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
