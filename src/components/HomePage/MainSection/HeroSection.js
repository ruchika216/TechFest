import React from 'react';
import { useHistory } from 'react-router';
import vid from '../../../assets/images/Desktop.mp4';
import logo from '../../../assets/images/Logo.png';
import './HeroSection.css';

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
            <div className='hero-details'>
                <div className='hero-text'>
                    <h1>techFEST'</h1>
                    <p>SLIET Longowal's Virtual <br />Techno-Management Fest</p>
                    <button
                        type="submit"
                        className="btn btn-outline-light btn-rounded "
                        data-mdb-ripple-color="dark"
                        onClick={handleRoute} >

                        Adventure Here!
                    </button>
                    <div className='hero-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>

            </div>



            {/* <div className="hero-div">
                <div className='hero-content' style={{ margin: 'auto', display: 'flex' }}>
                    <div className='hero-text'>
                        <h1>techFEST'</h1>
                        <p>SLIET Longowal's Virtual <br />Techno-Management Fest</p>
                        <button
                            type="submit"
                            className="btn btn-outline-light btn-rounded "
                            data-mdb-ripple-color="dark"
                            onClick={handleRoute} >

                            Adventure Here!
                        </button>
                    </div>
                    <div className='hero-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div> */}
        </div>

    );
}

export default HeroSection;


