import React from 'react'
import '../components/AboutUsPage/AboutUs.css';
import background from '../assets/images/background.png';
import Aboutusdesc from '../components/AboutUsPage/Aboutusdesc';
import CoreTeam from '../components/AboutUsPage/CoreTeam';
import Visionary from '../components/AboutUsPage/Visionary';

function AboutUs() {
    return (
        <div
            className="background"
            style={{ backgroundImage: `url(${background})` }}
        >
            <Aboutusdesc />
            <Visionary />
            <CoreTeam />
            <CoreTeam />
            <CoreTeam />
        </div>
    )
}

export default AboutUs
