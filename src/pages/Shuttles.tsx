import Breadcrumbs from '../Components/Breadcrumbs'
import { getCountryData } from '../data/basecode';
import TransferHero from "../Components/Hero2";
import TransferDetails from "../Components/TransferDetails";
import TestimonialSection from "../Components/TestimonialSection";
import FinalCta from "../Components/CTA";

const Shuttles = () => {
    const countryData = getCountryData();
    const shuttlesData = countryData.servicePages.shuttles;

    return (
        <div>
            <div className="w-full bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "School Trips" }]} />
                </div>
            </div>
            <div className="w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TransferHero {...shuttlesData?.hero} />
                </div>
            </div>
            <section className="w-full bg-white pt-0 pb-8 md:pb-12 lg:pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TransferDetails {...shuttlesData.details} />
                </div>
            </section>
            <section className="w-full py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TestimonialSection />
                </div>
            </section>
            <FinalCta />
        </div>
    )
}

export default Shuttles