import React from 'react';
import { getCountryData } from '../data/data';

const OurPartners = () => {
    const data = getCountryData();

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {data.partners.sectionTitle}
                    </div>
                </div>

                {/* Partner Logos Grid */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                    {data.partners.logos.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className="w-full h-auto max-h-12 object-contain"
                                onError={(e: any) => {
                                    // Fallback to a simple text representation if image fails
                                    e.target.style.display = 'none';
                                    const textDiv = document.createElement('div');
                                    textDiv.className = 'text-gray-800 font-bold text-sm text-center';
                                    textDiv.textContent = partner.name;
                                    e.target.parentNode.appendChild(textDiv);
                                }}
                            />
                        </div>
                    ))}
                </div> */}

                {/* Animated Scrolling Version (Alternative) */}
                <div className="mt-16 overflow-hidden">
                    <div className="flex animate-scroll whitespace-nowrap">
                        {[...data.partners.logos, ...data.partners.logos].map((partner, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center justify-center mx-8 grayscale opacity-60"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="h-10 w-auto object-contain"
                                    onError={(e: any) => {
                                        e.target.style.display = 'none';
                                        const textDiv = document.createElement('div');
                                        textDiv.className = 'text-gray-800 font-semibold text-sm';
                                        textDiv.textContent = partner.name;
                                        e.target.parentNode.appendChild(textDiv);
                                    }}
                                />
                            </div>
                        ))}
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
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default OurPartners;