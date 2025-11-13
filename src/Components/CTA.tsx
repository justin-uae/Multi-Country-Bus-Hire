import React from 'react';
import { getCountryData } from '../data/data';
import QuoteModal from './QuoteModal'; // Import the QuoteModal component

const CTA = () => {
    const data = getCountryData();
    
    // Safe data access with fallbacks
    const finalCtaData = data?.finalCta || {
        title: "Let's get your journey started",
        description: "Get a quick quote and travel with comfort, style, and confidence."
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
                {/* Left Side - Image */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                        src="/images/contact_support_transparent.png"
                        alt="Customer support"
                        width={300}
                        height={300}
                        className="mx-auto"
                        onError={(e: any) => {
                            e.target.src = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop';
                        }}
                    />
                </div>

                {/* Right Side - Content */}
                <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {finalCtaData.title}
                    </h2>
                    <p className="text-gray-700">
                        {finalCtaData.description}
                    </p>
                    <QuoteModal />
                </div>
            </div>
        </section>
    );
};

export default CTA;