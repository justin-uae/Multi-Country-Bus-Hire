import React, { useState } from 'react';
import { getCountryData } from '../data/data';
import { ArrowRight } from 'lucide-react';

const OurServices = () => {
    const data = getCountryData();
    const [activeService, setActiveService] = useState(0);

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {data.services.sectionTitle}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {data.services.heading}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {data.services.description}
                    </p>
                </div>

                {/* Service Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {data.services.categories.map((service, index) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(index)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeService === index
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>

                {/* Active Service Display */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative h-64 md:h-auto">
                            <img
                                src={data.services.categories[activeService].image}
                                alt={data.services.categories[activeService].name}
                                className="w-full h-full object-cover"
                                onError={(e: any) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {data.services.categories[activeService].name}
                            </h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {data.services.categories[activeService].description}
                            </p>
                            <a
                                href={data.services.categories[activeService].link}
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                            >
                                Learn more <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;