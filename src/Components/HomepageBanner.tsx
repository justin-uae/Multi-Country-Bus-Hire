import React from 'react';
import { getCountryData } from '../data/data';

const HomepageBanner = () => {
    const data = getCountryData();

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            {data.hero.title.split(data.hero.highlight)[0]}
                            <span className="text-blue-600">{data.hero.highlight}</span>
                            {data.hero.title.split(data.hero.highlight)[1]}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600">
                            {data.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                                {data.hero.ctaText}
                            </button>

                            <div className="flex items-center gap-2 text-gray-600">
                                <span>Or speak to one of our team on</span>
                                <a
                                    href={`tel:${data.contact.phone}`}
                                    className="text-blue-600 font-semibold hover:text-blue-700"
                                >
                                    {data.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src={data.hero.image}
                                alt="Luxury Bus"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                onError={(e: any) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>

                        {/* Decorative background shapes */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Wave decoration at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <path
                        d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HomepageBanner;