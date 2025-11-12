import React from 'react';
import { getCountryData } from '../data/data';
import { ShieldCheck, User, Clock, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
    const data = getCountryData();

    const iconMap = {
        'shield-check': ShieldCheck,
        'user': User,
        'clock': Clock,
        'headphones': Headphones
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {data.whyChooseUs.sectionTitle}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
                        {data.whyChooseUs.heading}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Bus Image with decorative elements */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10">
                            <img
                                src={data.whyChooseUs.image}
                                alt="Premium Bus"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                onError={(e: any) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="space-y-6 order-1 lg:order-2">
                        {data.whyChooseUs.features.map((feature: any) => {
                            const IconComponent = ShieldCheck;

                            return (
                                <div
                                    key={feature.id}
                                    className="flex gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <IconComponent className="w-7 h-7 text-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;