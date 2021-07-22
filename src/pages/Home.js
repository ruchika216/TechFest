import { render } from '@testing-library/react';
import React from 'react'
import Feature from '../components/MainMenu/FeaturedSection/Feature';
import HeroSection from '../components/MainMenu/HeroSection/HeroSection';
import Sponsor from '../components/MainMenu/SponsorSection/Sponsor';
import '../App.css'

function Home() {

    return (
        <div className='homedata'>
            <HeroSection />
            <Feature />
            <Sponsor />
        </div>
    )
}

export default Home;

