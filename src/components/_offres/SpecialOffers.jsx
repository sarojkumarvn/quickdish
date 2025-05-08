import React from "react";

const offers = [
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

const SpecialOffers = () => {
  return (
    <section id="special-offers" className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Special Offers</h2>
            <p className="text-neutral-300">Exclusive deals for our valued customers</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="bg-neutral-800 p-2 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors duration-300">
              <svg className="h-5 w-5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-neutral-800 p-2 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors duration-300">
              <svg className="h-5 w-5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className={`absolute top-3 left-3 ${offer.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {offer.badge}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-bold">{offer.price}</span>
                  <button className={`${offer.buttonColor} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                    {offer.buttonText}
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

export default SpecialOffers;
