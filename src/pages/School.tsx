import TransferHero from '../Components/Hero2'
import Breadcrumbs from "../Components/Breadcrumbs";
import TransferDetails from '../Components/TransferDetails'
import TestimonialSection from '../Components/TestimonialSection'
import FinalCta from '../Components/CTA'
import { getCountryData } from '../data/basecode';

export default function SchoolTrips() {
    const countryCode = 'pl';
    const countryData = getCountryData(countryCode);
    const schoolTripsData = countryData.servicePages.school;

    return (
        <>
            {/* Breadcrumbs with proper container to match other sections */}
            <div className="w-full bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Breadcrumbs
                        crumbs={[
                            { name: "Home", href: "/" },
                            { name: "School Trips" },
                        ]}
                    />
                </div>
            </div>

            {/* Hero section - ensure it uses the same container */}
            <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TransferHero {...schoolTripsData.hero} />
                </div>
            </div>

            {/* Details section with same container */}
            <section className="w-full bg-white py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TransferDetails {...schoolTripsData.details} />
                </div>
            </section>

            {/* Testimonials section */}
            <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TestimonialSection />
                </div>
            </section>

            {/* Final CTA */}
            <FinalCta />
        </>
    );
}