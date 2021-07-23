import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import HeroSection from '../../components/HomePage/MainSection/HeroSection';
import HomeSponsor from '../../components/HomePage/SponsorSection/Sponsor';

function Home() {
  return (
    <div>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <HomeSponsor />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </div>
  );
}

export default Home;
