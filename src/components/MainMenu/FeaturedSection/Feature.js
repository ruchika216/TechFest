import { MenuItem } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import feature from '../../../assets/images/video.png';
import './Feature.css';

const Feature = () => {
    return (
        <div className="background">
            <section className="feature" id="feature">
                <div className="max-width">
                    <div className="feature-content">
                        <div className="column right">
                            <div className="text">
                                <div className="bold">techFEST' 21</div>
                                <h4>REVITALISING INDIA | पुनः सशक्त भारत </h4>
                                <p>The annual technical festival of SLIET, techFEST <br /> provides a platform to over 10000
                                    eyeballs
                                    to witness <br /> a magnificent fusion of science and technology with <br /> pure delight
                                    and
                                    enthusiasm.
                                </p>
                                <div className='fea-button' style={{ display: 'flex', color: 'white' }}>
                                    <MenuItem className="explore" component={Link} to="/domain">Explore The Domains</MenuItem>
                                    <MenuItem className="aboutus" component={Link} to="/about-us">About Us</MenuItem>

                                </div>
                                {/* <button className="explore"><span></span> Explore The Domains</button>
                                <button className="aboutus"><span></span> About Us</button> */}

                            </div>
                        </div>
                        <div className="column left">
                            <img src={feature} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature
