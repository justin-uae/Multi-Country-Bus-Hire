import ContactModal from "./QuoteModal";

interface CTABannerProps {
    title: string;
    description: string;
    image: string;
}

const AboutUsBanner = ({
    title,
    description,
    image,
}: CTABannerProps) => {
    return (
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
            {/* Background Image with Darker Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-6 w-full">
                    {/* Title - Single Line with Responsive Font Size and Text Shadow */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {title}
                    </h1>

                    {/* Description with Text Shadow */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <div
                        className="inline-block text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                        <ContactModal />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsBanner;