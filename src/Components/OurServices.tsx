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
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-10">
                    <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold">
                        {badge}
                    </h3>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                        {heading}
                    </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="mb-12">
                    {/* Desktop Tabs */}
                    <div className="hidden md:flex justify-center gap-4 flex-wrap">
                        {services.map((service) => (
                            <button
                                key={service.key}
                                onClick={() => setActiveTab(service.key)}
                                className={`px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border 
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
                    <div className="md:hidden">
                        <select
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-700 font-semibold focus:border-blue-500 focus:outline-none"
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
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={activeService.image}
                                        alt={activeService.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        {activeService.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                        {activeService.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to={activeService.key}
                                            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
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