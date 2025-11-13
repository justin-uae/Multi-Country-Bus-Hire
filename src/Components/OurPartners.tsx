import { getCountryData } from '../data/basecode';

const OurPartners = () => {
  const countryData = getCountryData();

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...countryData.partners.items, ...countryData.partners.items];

  return (
    <section className=" bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold">
            <span className="text-blue-600">{countryData.partners.badge}</span>
          </div>
        </div>

        {/* Animated Partner Logos - Infinite Scroll */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll hover:pause-animation">
              {duplicatedPartners.map((partner: any, index: any) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                  style={{ width: '150px' }}
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-md transition-all duration-500 transform">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-500 -z-10 blur"></div>

                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-20 object-contain transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                    display: flex;
                    width: fit-content;
                }

                .pause-animation:hover {
                    animation-play-state: paused;
                }

                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                }
            `}</style>
    </section>
  );
};

export default OurPartners;