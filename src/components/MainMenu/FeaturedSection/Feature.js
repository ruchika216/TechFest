import React from 'react'
import '../FeaturedSection/Feature.css';
import { useHistory } from 'react-router';
import feature from '../../../assets/images/Phonevideo.mp4';

const Feature = () => {
    const history = useHistory();

    const handleRoute = () => {
        history.push("/domain");
    }
    const clickRoute = () => {
        history.push("/about-us");
    }
    return (
        <div className='feature-container'>
            <div className='fea-content'>
                <div className='fea-text'>
                    <h1>techFEST' 21</h1>
                    <h4>REVITALISING INDIA | पुनः सशक्त भारत </h4>
                    <p>The annual technical festival of SLIET, techFEST <br /> provides a platform to over 10000
                        eyeballs
                        to witness <br /> a magnificent fusion of science and technology with <br /> pure delight
                        and
                        enthusiasm.
                    </p>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-light btn-rounded "
                    data-mdb-ripple-color="dark"
                    onClick={handleRoute} >

                    Explore The Domains
                </button>
                <button
                    type="submit"
                    className="btn btn-outline-light btn-rounded "
                    data-mdb-ripple-color="dark"
                    onClick={clickRoute} >

                    About Us
                </button>
            </div>
            <div className='fea-video'>
                <video src={feature} autoPlay loop muted>
                    Featured Video Here!
                </video>

            </div>

        </div>
    )
}

export default Feature
