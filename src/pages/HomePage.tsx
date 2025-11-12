import React from 'react'
import HomepageBanner from '../Components/HomePageBanner'
import OurServices from '../Components/OurServices'
import OurPartners from '../Components/OurPartners'
import WhyChooseUs from '../Components/WhyChooseUs'
import Stats from '../Components/Stats'
import CTA from '../Components/CTA'

const HomePage = () => {
    return (
        <div>
            <HomepageBanner />
            <OurServices />
            <OurPartners />
            <WhyChooseUs />
            <Stats />
            <CTA />
        </div>
    )
}

export default HomePage