import HomepageBanner from '../Components/HomepageBanner'
import OurPartners from '../Components/OurPartners'
import WhyChooseUs from '../Components/WhyChooseUs'
import Stats from '../Components/Stats'
import CTA from '../Components/CTA'
import { getCountryData } from '../data/basecode'
import ServicesSection from '../Components/OurServices'

const HomePage = () => {

    const countryData = getCountryData();

    return (
        <div>
            <HomepageBanner />
            <ServicesSection
                badge="Our Services"
                heading={`Comprehensive transport solutions tailored to meet all your travel needs across ${countryData.hero.countryName}`}
                services={countryData.services}
            />
            <OurPartners />
            <WhyChooseUs
                title={countryData.whyChooseUs.title}
                description={countryData.whyChooseUs.description}
                image={countryData.whyChooseUs.image}
                features={countryData.whyChooseUs.features}
            />
            <Stats />
            <CTA />
        </div>
    )
}

export default HomePage