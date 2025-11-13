import { ShieldCheck, User, Clock, Headset } from "lucide-react";

interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface WhyChooseUsProps {
    title: string;
    description: string;
    image: string;
    features: Feature[];
}

const WhyChooseUs = ({ title, description, image, features }: WhyChooseUsProps) => {
    const iconMap: Record<string, any> = {
        ShieldCheck: ShieldCheck,
        User: User,
        Clock: Clock,
        Headset: Headset,
    };

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f9fbff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left: Bus image with polygon background */}
                    <div className="relative flex justify-center order-2 lg:order-1 py-8 sm:py-12">
                        {/* Polygon background - hidden on mobile, responsive on larger screens */}
                        <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] sm:w-[300px] md:w-[400px] lg:w-[450px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[380px] bg-blue-100 clip-path-polygon z-0" />
                        {/* Bus image */}
                        <img
                            src={image}
                            alt="Bus"
                            loading="lazy"
                            className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] object-contain"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
                        {/* Section title */}
                        <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                            {title}
                        </div>

                        {/* Heading */}
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                            {description}
                        </h2>

                        {/* Feature list */}
                        <div className="space-y-3 sm:space-y-4 md:space-y-5">
                            {features.map((feature) => {
                                const IconComponent = iconMap[feature.icon] || ShieldCheck;
                                return (
                                    <div key={feature.id} className="flex gap-3 items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom polygon shape */}
            <style>{`
        .clip-path-polygon {
          clip-path: polygon(0 100%, 20% 0, 100% 0, 80% 100%);
        }
      `}</style>
        </section>
    );
};

export default WhyChooseUs;