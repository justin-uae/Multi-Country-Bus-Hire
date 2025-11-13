import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Service {
    key: string;
    title: string;
    description: string;
    image: string;
}

interface ServicesSectionProps {
    badge: string;
    heading: string;
    services: Service[];
}

const ServicesSection = ({ badge, heading, services }: ServicesSectionProps) => {
    const [activeTab, setActiveTab] = useState(services[0]?.key || '');

    const activeService = services.find((service) => service.key === activeTab);

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h3 className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                        {badge}
                    </h3>
                    <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-4 leading-tight">
                        {heading}
                    </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="mb-8 sm:mb-10 md:mb-12">
                    {/* Desktop Tabs */}
                    <div className="hidden md:flex justify-center gap-2 lg:gap-4 flex-wrap px-4">
                        {services.map((service) => (
                            <button
                                key={service.key}
                                onClick={() => setActiveTab(service.key)}
                                className={`px-3 lg:px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border text-sm lg:text-base whitespace-nowrap
                  ${activeTab === service.key
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Dropdown */}
                    <div className="md:hidden px-2">
                        <select
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-700 font-semibold focus:border-blue-500 focus:outline-none text-sm sm:text-base"
                        >
                            {services.map((service) => (
                                <option key={service.key} value={service.key}>
                                    {service.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Active Service Content */}
                {activeService && (
                    <div className="max-w-6xl mx-auto px-2 sm:px-4">
                        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative h-48 sm:h-64 md:h-auto overflow-hidden order-1 md:order-1">
                                    <img
                                        src={activeService.image}
                                        alt={activeService.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 md:hidden"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-2">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                                        {activeService.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                                        {activeService.description}
                                    </p>

                                    {/* Action Button */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <Link
                                            to={activeService.key}
                                            className="border-2 border-gray-300 text-gray-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center text-sm sm:text-base"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;