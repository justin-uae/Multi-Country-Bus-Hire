interface AboutFeature {
    title: string;
    description: string;
}

interface AboutUsProps {
    badge: string;
    description: string;
    image: string;
    features: AboutFeature[];
}

const AboutUsBullets = ({ badge, description, image, features }: AboutUsProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 items-center gap-12">
                    {/* Left: Image */}
                    <div className="relative flex justify-center">
                        <img
                            src={image}
                            alt={badge}
                            className="w-full max-w-lg object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-6">
                        {/* Section badge */}
                        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                            {badge}
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-base leading-relaxed">
                            {description}
                        </p>

                        {/* Feature list */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        <span className="font-semibold text-gray-900">
                                            {feature.title}:
                                        </span>{" "}
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsBullets;