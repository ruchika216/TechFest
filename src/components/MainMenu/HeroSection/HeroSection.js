import React from 'react';
import './HeroSection.css';
// import vid from '../../assets/images/LaptopGif.webm';
import { useHistory } from 'react-router';
import vid from '../../../assets/images/Desktop.mp4';
import logo from '../../../assets/images/Logo.png';


function HeroSection() {

    const history = useHistory();

    const handleRoute = () => {
        history.push("/feature");
    }

    return (
        <div className='hero-container'>
            <div className='hero-video'>
                <video src={vid} autoPlay loop muted style={{ width: '100%' }} />
            </div>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>techFEST'</h1>
                    <p>SLIET Longowal's Virtual <br />Techno-Management Fest</p>
                </div>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-outline-light btn-rounded "
                data-mdb-ripple-color="dark"
                onClick={handleRoute} >

                Adventure Here!
            </button>

        </div>

    );
}

export default HeroSection;
