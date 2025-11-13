import { getCountryData } from '../data/basecode';
import AboutUsBullets from '../Components/AboutUsBullets';
import ServicesSection from '../Components/OurServices';
import TestimonialSection from '../Components/TestimonialSection';
import AboutUsBanner from '../Components/AboutUsBanner';

const AboutUs = () => {
    const countryData = getCountryData();

    return (
        <div>
            <div className="w-full">
                <AboutUsBanner
                    title="Driven by Excellence, Connecting Communities"
                    description={countryData.aboutUs.description}
                    image={countryData.aboutUs.image}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ServicesSection
                        badge="Our Services"
                        heading={`Comprehensive transport solutions tailored to meet all your travel needs across ${countryData.hero.countryName}`}
                        services={countryData.services}
                    />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AboutUsBullets
                        badge={countryData.aboutUs.badge}
                        description={countryData.aboutUs.description}
                        image={countryData.aboutUs.image}
                        features={countryData.aboutUs.features}
                    />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <TestimonialSection />
                </div>
            </div>
        </div>
    )
}

export default AboutUs