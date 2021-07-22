import React from 'react'
import classes from './exploreEvents.module.css'
import img1 from '../../../assets/images/bg4.jpg';

export const ExploreEvents=()=>{
    return(
        <div className={classes.eventContainer}>
            <hr/>
            <div className={classes.eventContent}>
                <div className={classes.eventImage}>
                    <div className={classes.eventImageContainer}>

                    </div>
                    <div className={classes.eventDeadline}>
                        <p>Register Before : 09/07</p>
                        <p>11:59 PM</p>
                    </div>
                </div>
                <div className={classes.eventInfo}>
                    <div className={classes.text}>
                        <h1>Name of Event</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in .
                        </p>
                    </div>
                    <span>
                        <button className={classes.btnRegister}>Register Now</button>
                        <button className={classes.btnStatement}>Problem statement</button>
                    </span>
                </div>
                <div className={classes.eventPrize}>
                    <div className={classes.prizeMoney}>
                        <p>Prizes Worth</p>
                        <p>Rs 50,000</p>
                    </div>
                    <div className={classes.coordinatorContainer}>
                        <div className={classes.coordinator}>
                            <div className={classes.coordinatorDetails}>
                                <p>Event Coordinator</p>
                                <p>+91 xxxxx xxxxx</p>
                            </div>
                            <img src={img1} alt='' className={classes.coordinatorImage}/>
                        </div>
                        <div className={classes.coordinator}>
                            <div className={classes.coordinatorDetails}>
                                <p>Event Coordinator</p>
                                <p>+91 xxxxx xxxxx</p>
                            </div>
                            <img src={img1} alt='' className={classes.coordinatorImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}