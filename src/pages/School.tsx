import TransferHero from "../Components/Hero2";
import Breadcrumbs from "../Components/Breadcrumbs";
import TransferDetails from "../Components/TransferDetails";
import TestimonialSection from "../Components/TestimonialSection";
import FinalCta from "../Components/CTA";
import { getCountryData } from "../data/basecode";

export default function SchoolTrips() {
  const countryCode = "pl";
  const countryData = getCountryData(countryCode);
  const schoolTripsData = countryData.servicePages.school;

  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "School Trips" }]} />
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TransferHero {...schoolTripsData.hero} />
        </div>
      </div>

      <section className="w-full bg-white pt-0 pb-8 md:pb-12 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TransferDetails {...schoolTripsData.details} />
        </div>
      </section>

      <section className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSection />
        </div>
      </section>

      <FinalCta />
    </>
  );
}