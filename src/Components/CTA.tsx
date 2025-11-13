import React from 'react';
import { getCountryData } from '../data/basecode';

const CTA = () => {
    const countryCode = 'pl';
    const countryData = getCountryData(countryCode);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0 items-center">
                        {/* Left Side - Image */}
                        <div className="relative h-64 md:h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-8">
                            <img
                                src={countryData.finalCta.image}
                                alt="Customer Support"
                                className="w-full max-w-xs h-auto object-contain"
                                onError={(e: any) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop';
                                }}
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {countryData.finalCta.title}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {countryData.finalCta.description}
                            </p>
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                {countryData.finalCta.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;