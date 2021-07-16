import React from 'react'
import Facebook from '../../assets/Icons/facebookicon.svg';
import Instagram from '../../assets/Icons/instagramicon.svg';
import LinkedinIn from '../../assets/Icons/linkedinicon.svg';
import Youtube from '../../assets/Icons/youtubeicon.svg';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <div className='foot'>
            <div className="sponser " >
                <h2>SPONSORS</h2>

                <footer className="sponsericons">
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={LinkedinIn} alt="linkedin" />
                    <img src={Youtube} alt="youtube" />
                </footer>
            </div>
            <footer className="icons">
                <div className="copyright">
                    Copyright © 2021. All Rights Reserved.
                </div>
                <button className="community">Join our telegram community</button>
                <div className="mediaicons">
                    <FacebookIcon color="inherit" fontSize="large" />
                    <InstagramIcon color="inherit" fontSize="large" />
                    <LinkedInIcon color="inherit" fontSize="large" />
                    <YouTubeIcon color="inherit" fontSize="large" />

                </div>
            </footer>

        </div>
    )
}

export default Footer;
