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
        <section className="py-20 bg-[#f9fbff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 items-center gap-12">
                    {/* Left: Bus image with polygon background */}
                    <div className="relative flex justify-center">
                        {/* Polygon background */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-100 clip-path-polygon z-0" />
                        {/* Bus image */}
                        <img
                            src={image}
                            alt="Bus"
                            loading="lazy"
                            className="relative z-10 w-full max-w-lg object-contain"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        {/* Section title */}
                        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                            {title}
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
                            {description}
                        </h2>

                        {/* Feature list */}
                        <div className="space-y-6">
                            {features.map((feature) => {
                                const IconComponent = iconMap[feature.icon] || ShieldCheck;
                                return (
                                    <div key={feature.id} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-blue-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-base">
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