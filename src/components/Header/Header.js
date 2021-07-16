import React from 'react';
import Nav from '../Navbar/Nav';
import img1 from '../../assets/images/Logo.png';
import img2 from '../../assets/images/BgLogoGradient.png';
import img3 from '../../assets/images/Logo.png';
import img4 from '../../assets/images/video.png';

// import '../../index.css';

function Header() {
    return (
        <>
            <div id='main' className='head'>
                <Nav />
                <div className="logo1">
                    <div className="text1">
                        <h1>techFEST’</h1>

                        <p>
                            Sliet Longowal’s  Virtual <br />
                            Techno- Management Fest
                        </p>
                        <li><a href="./index2.html"> Adaventure Here</a></li>
                    </div>
                    <img src={img1} alt="" className="leftlogo1" />
                    <img src={img2} className="rightlogo1" />
                </div>
            </div>

            {/*  */}

            <div className="second">
                <div className="middle">
                    <div className="text">
                        <div className="bold">techFEST' 21</div>
                        <h4>REVITALISING INDIA |  पुनः सशक्त भारत </h4>
                        <p>The annual technical festival of SLIET, techFEST <br /> provides a platform to over 10000 eyeballs to witness <br /> a magnificent fusion of science and technology with <br /> pure delight and enthusiasm.
                        </p>
                        <button className="Explore">Explore The Domains</button>
                        <button className="aboutus">About Us</button>

                    </div>
                    <div className="logoimage">
                        <img src={img3} alt="" />
                    </div>
                    <div className="featurevideo">
                        <p>Feature video Here!</p>
                        {/* <img src={img4} alt="" /> */}
                        <video src='https://www.youtube.com/watch?v=5IyH5s1N1Fc' />
                    </div>
                </div>
            </div>



        </>



    )
}

export default Header;
