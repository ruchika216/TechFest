import React from 'react'
import SponsorCard from '../components/SponsorsPage/SponsorCard'
import SponsorCard2 from '../components/SponsorsPage/SponsorCard2'
import SponsorForm from '../components/SponsorsPage/SponsorForm'
import '../components/SponsorsPage/styles.css';
import Footer from '../components/HomePage/Footer/Footer'

function Sponsor() {
    return (
        <div className="sponsorCard" >
            <SponsorCard />
            <SponsorCard2 />
            <SponsorForm />
            <Footer />
        </div>
    )
}

export default Sponsor;