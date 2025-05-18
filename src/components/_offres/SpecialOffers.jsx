import { useState } from "react"; // 🔧 Added for managing component state
import { offers } from "../../_constants/constants";

const SpecialOffers = () => {
  
  const [alert, setAlert] = useState(null);

  const handleClaimOffer = (title) => {
    setAlert(`You claimed the offer: ${title}`); // 🔧 Set alert message
    
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <section id="special-offers" className="py-16 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Alert meggage block */}
        {alert && ( // show the alert message if the state is true
          <div className="mb-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{alert}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Special Offers
            </h2>
            <p className="text-neutral-300">
              Exclusive deals for our valued customers
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="bg-neutral-800 p-2 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors duration-300">
              <svg
                className="h-5 w-5 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-neutral-800 p-2 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors duration-300">
              <svg
                className="h-5 w-5 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute top-3 left-3 ${offer.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {offer.badge}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {offer.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-bold">
                    {offer.price}
                  </span>
                  <button
                    className={`${offer.buttonColor} text-white px-4 py-2 rounded-full text-sm font-medium`}
                    // 🔧 Updated button click handler
                    onClick={() =>
                      offer.buttonText === "Claim Offer"
                        ? handleClaimOffer(offer.title)
                        : alert("Coming soon")
                    }
                  >
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
