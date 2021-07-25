import React, { useState, useEffect } from 'react';
import './assets/css/dashres.css';
import ProfileInformation from './Profile';

import { Link } from 'react-router-dom';
import * as Scroll from "react-scroll";
import Leffect from "./assets/images/Group 1left-bar-background.png";
import Reffect from "./assets/images/right-middle-bg-effect.png";
import BottomLeft from "./assets/images/bottom-left-bg.png";
import TechIcon from "./assets/images/tech icon.svg";
import Profile from "./assets/images/profile.svg";
import Techfest21 from "./assets/images/__techFEST 21.svg";
import Home from "./assets/images/home.svg";
import Payments from "./assets/images/payments.svg";
import Editbutton from "./assets/images/edit-button.svg";
import Certificate from "./assets/images/certificate.svg";
import Event from "./assets/images/event.svg";
import Line23 from "./assets/images/Line 23.svg";
import Solid from "./assets/images/solid.svg";
import ProfileImage from "./assets/images/profile-image.png";
import Facebook from './assets/Icons/facebookicon.svg';
import Instagram from './assets/Icons/instagramicon.svg';
import Linkedin from './assets/Icons/linkedinicon.svg';
import Youtube from './assets/Icons/youtubeicon.svg';

import moment from 'moment';
import { getUser } from './helper/userapicalls';
import { isAuthenticated } from '../../../auth/helper';
import { Check } from '@material-ui/icons';

function Dash() {
  let ScrollLink = Scroll.Link;
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    userID: "",
    email: "",
    phone: "",
    dob: new Date(),
    designation: "",
    collegeName: "",
    collegeAddress: "",
    courseEnrolled: "",
    whatsappPhoneNumber: "",
    telegramPhoneNumber: "",
    branchOfStudy: "",
    yearOfStudy: 0,
    eventRegIn: [],
    workshopsEnrolled: [],
    loading: false,
    updated: false,
    error: "",

  });
  const [completeUser, setCompleteUser] = useState(null);


  const preload = (userId, token) => {
    getUser(userId, token).then(data => {

      if (data.error) {
        setValues({ ...values, error: data.error });

      } else {

        setCompleteUser(data);
        setValues({
          ...values,
          name: data.name,
          lastName: data.lastName,
          userID: data.userId,
          email: data.email,
          phone: data.phone,
          designation: data.designation,
          collegeName: data.collegeName,
          collegeAddress: data.collegeAddress,
          courseEnrolled: data.courseEnrolled,
          branchOfStudy: data.branchOfStudy,
          yearOfStudy: data.yearOfStudy,
          whatsappPhoneNumber: data.whatsappPhoneNumber,
          telegramPhoneNumber: data.telegramPhoneNumber,
          dob: moment(data.dob).format('YYYY-MM-DD'),
          eventRegIn: data.eventRegIn,
          workshopsEnrolled: data.workshopsEnrolled,
        });
      }
    });
  }


  useEffect(() => {
    preload(user._id, token);


  }, [])



  return (
    <main>
      {/* bg effect */}
      <img className="main_left-bar_bg" src={Leffect} alt="left-bar-bg" />
      <img src={Reffect} alt="right-middle" className="main_right-middle_bg" />
      <img
        src={BottomLeft}
        alt="left-bottom_bg"
        className="main_left-bottom_bg"
      />
      <div className="leftbar">
        <Link to="/" className="logo active">
          <img src={TechIcon} alt="techFEST" />
          <img src={Techfest21} alt="techFEST-text" className="techfestName" />
        </Link>
        <div className="dashboard-link">
          <ScrollLink
            smooth={true}
            duration={800}
            to="dashboard"
            className="dlink cursor"
          >
            <img src={Home} alt="techFEST-profile-icon" />
            Dashboard
          </ScrollLink>
          <ScrollLink
            smooth={true}
            duration={600}
            to="profile"
            className="dlink cursor"
          >
            <img src={Profile} alt="techFEST-profile-icon" />
            Profile Information
          </ScrollLink>
          <ScrollLink
            smooth={true}
            spy={true}
            duration={800}
            to="certificate"
            className="dlink cursor"
          >
            <img src={Certificate} alt="techFEST-profile-icon" />
            Certificates & Rewards
          </ScrollLink>
        </div>
      </div>
      {/* <!-- MAIN CONTENT according to the option clicked in leftbar --> */}
      <div className="main-content">
        {/* <!-- DASHBOARD --> */}
        <div className="dashboard" id="dashboard">
          <div className="user-profile-display">
            <img src={ProfileImage} alt="profile" />
            <div className="user-info">
              <b className="user-name">{`${values.name}  ${values.lastName}`}</b>
              <p>{values.collegeName}</p>
              <p className="user-id">{values.userID}</p>
            </div>
          </div>

          <div className="events">

            {/* <!-- Event Card --> */}

            <div className="event-card">
              <div className="event-card_title">
                <img src={Event} alt="event-techFEST" />
                Events Registered
              </div>

              {values.eventRegIn.length > 0 ?
                <div className="event-card_events-list">

                  {values.eventRegIn.map((row) => (
                    <div className="event" key={row._id}>
                      <span className="event-name">{row.eventName}</span>
                      <span className="event-time">{`${moment(row.eventDate).format('DD-MM')}`}</span>
                    </div>
                  ))
                  }

                </div>
                :
                <div className="event" style={{ borderBottom: 'none' }}>
                  <span className="event-name">Please register in Events to see detail </span>

                </div>
              }

            </div>
            {/* <!-- Workshop Card --> */}
            <div className="event-card">
              <div className="event-card_title">
                <img src={Solid} alt="event-techFEST" />
                Workshops Registered
              </div>
              {values.workshopsEnrolled.length > 0 ?
                <div className="event-card_events-list">
                  {values.workshopsEnrolled.map((row) => (
                    <div className="event">
                      <span className="event-name">Event Name</span>
                      <span className="event-time">10/07</span>
                    </div>
                  ))}
                </div>
                :
                <div className="event" style={{ borderBottom: 'none' }}>
                  <span className="event-name">Please register in Workshops to see details</span>

                </div>
              }

            </div>
          </div>
        </div>

        {/* <!-- PROFILE --> */}

        <ProfileInformation />



        {/* <!-- CERTIFICATION AND AWARDS --> */}

        <div className="profile certificate" id="certificate">
          <div className="profile-information">
            <div className="section-heading">
              <div className="section-heading_text">
                <h3 className="section-heading_heading">
                  Certification & Awards
                </h3>
                <p className="section-heading_information">
                  Claim your Certificate Here !
                </p>
              </div>
            </div>
            <div className="profile-information_card card grid-colum-template-3-1">
              <div className="profile-information_info">
                <div className="pi-heading">
                  Event Certificates
                  <hr />
                </div>
                <div className="pi_personal-info">

                  <div className="certificate-download_group">
                    <div className="pi_info-group">
                      Please Register to get Certificates
                    </div>

                  </div>

                  {/* <div className="certificate-download_group">
                    <div className="pi_info-group">
                      <div className="info-group_que">Profession</div>
                      <div className="info-group_ans">Student</div>
                    </div>
                    <Link to="#" className="certificate-download_group-button">
                      Download
                    </Link>
                  </div> */}

                </div>
                <div className="pi-heading">
                  Workshop Certificates
                  <hr />
                </div>
                <div className="pi-contact-information">


                  <div className="certificate-download_group">
                    <div className="pi_info-group">
                      Please Register to get Certificates
                    </div>

                  </div>


                  {/* <div className="certificate-download_group">
                    <div className="pi_info-group">
                      <div className="info-group_que">Profession</div>
                      <div className="info-group_ans">Student</div>
                    </div>
                    <Link to="#" className="certificate-download_group-button">
                      Download
                    </Link>
                  </div> */}



                </div>
              </div>
              <div className="profile-information_pic"></div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="footer-copyright-text">
            Copyright © 2021. All Rights Reserved.
          </div>
          <div class="footer-cta">
            <Link to="#" className="Link-a cursor">
              Join our Telegram Commuity
            </Link>
          </div>
          <div class="footer-sm">
            <Link to="#" className="Link-a">
              <img src={Facebook} alt="facebook" />
            </Link>
            <Link to="#" className="Link-a">
              <img src={Instagram} alt="instagram" />
            </Link>
            <Link to="#" className="Link-a">
              <img src={Linkedin} alt="linkedin" />
            </Link>
            <Link to="#" className="Link-a">
              <img src={Youtube} alt="youtube" />
            </Link>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </main>
  );
}

export default Dash
