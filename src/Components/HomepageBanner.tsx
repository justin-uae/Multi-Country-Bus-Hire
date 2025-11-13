import { getCountryData } from '../data/basecode';
import ContactModal from './QuoteModal';

const HomepageBanner = () => {
    const data = getCountryData();
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-5">

                {/* Left side: text + badges */}
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        {data?.hero?.title} {""}
                        <span className="text-blue-600 underline"> {data?.hero?.countryName}</span>

                    </h1>

                    <p className="text-gray-700 max-w-md">
                        {data?.hero?.description}
                        {/* Discover reliable and affordable <strong>coach and minibus hire in France</strong> with <strong>France Buses</strong> — ideal for corporate events, school trips, airport transfers, private tours, and group travel across the country. */}
                    </p>
                    <div className="hidden md:flex items-center space-x-4 mt-5 mb-10">
                        <ContactModal />
                    </div>
                    {/* Request a Quote button - now left-aligned and below description */}


                    <p className="text-gray-700 max-w-md">
                        Speak directly with our transport team at{" "}
                        <a href="tel:+442038343226">
                            <span className="text-primary">{data?.company?.phone}</span>
                        </a>
                    </p>
                </div>

                {/* Right side: hero image */}
                <div className="flex justify-center lg:justify-end relative">
                    <img
                        src={data.hero.image}
                        width={600}
                        height={400}
                        loading='lazy'
                        alt="France Buses coach and minibus hire services in France"
                        className="object-contain z-10 relative h-auto"
                    />
                    <img
                        src={data.hero.frameImage}
                        width={600}
                        height={400}
                        loading='lazy'
                        alt="France Buses decorative frame design"
                        className="object-contain absolute right-[-20px] w-[30vw] max-w-[350px] lg:max-w-[600px] h-auto lg:h-[520px] hidden lg:block"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomepageBanner;