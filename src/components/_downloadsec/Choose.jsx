import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast Delivery",
      description: "Our delivery partners ensure your food arrives hot and fresh.",
    },
    {
      title: "Wide Selection",
      description: "Choose from thousands of restaurants and cuisines in your area.",
    },
    {
      title: "Contactless Delivery",
      description: "Safe, contactless delivery options available for all orders.",
    },
    {
      title: "Easy Payments",
      description: "Multiple secure payment options for your convenience.",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1454944338482-a69bb95894af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ];

  return (
    <div className="bg-neutral-800  p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Choose Our Service?
          </h3>
          <p className="text-neutral-300 mb-6">
            We're committed to making food delivery simple, fast, and enjoyable for everyone.
          </p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-orange-900 rounded-full p-2 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-neutral-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden h-48">
              <img
                src={src}
                alt="Food delivery feature"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
