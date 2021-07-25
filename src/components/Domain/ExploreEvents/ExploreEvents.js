import React from 'react'
import classes from './exploreEvents.module.css'
<<<<<<< HEAD
import { BASE_API } from '../../../Utils/backend';
import {Calendar, Clock} from 'react-bootstrap-icons'
import { CalendarViewDayRounded } from '@material-ui/icons';


export const ExploreEvents=(props)=>{
=======
import img1 from '../../../assets/images/bg4.jpg';

export const ExploreEvents=()=>{
>>>>>>> 52f9e7096fd49bfb424241d101b1377d03820c20
    return(
        <div className={classes.eventContainer}>
            <hr/>
            <div className={classes.eventContent}>
                <div className={classes.eventImage}>
                    <div className={classes.eventImageContainer}>
<<<<<<< HEAD
                        <img src={`${BASE_API}${props.content.photo}`} alt=''/>
                    </div>
                    <div className={classes.eventDeadline}>
                        <Calendar color='white'/>
                        <p>{`Register Before : ${props.content.regEndDate.split('T')[0]}`}</p>
                        <Clock color='white'/>
                        <p>{`${props.content.regEndDate.split('T')[1].split('.')[0]}`}</p>
                        {/* <p>{`Register Before : ${props.content.regEndDate.split('T')[0]}`}</p>
                        <span>
                            <Clock color='white'/>
                            <p>{`${props.content.regEndDate.split('T')[1].split('.')[0]}`}</p>
                        </span> */}
                        
=======

                    </div>
                    <div className={classes.eventDeadline}>
                        <p>Register Before : 09/07</p>
                        <p>11:59 PM</p>
>>>>>>> 52f9e7096fd49bfb424241d101b1377d03820c20
                    </div>
                </div>
                <div className={classes.eventInfo}>
                    <div className={classes.text}>
<<<<<<< HEAD
                        <h1>{props.content.eventName}</h1>
                        <p>
                            {props.content.eventDescription}
=======
                        <h1>Name of Event</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in .
>>>>>>> 52f9e7096fd49bfb424241d101b1377d03820c20
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
<<<<<<< HEAD
                        <p>{`Rs : ${props.content.prize[0].split(',').map(i=>Number(i)).reduce((a,b)=>a+b,0)}` }</p>
                    </div>
                    <div className={classes.coordinatorContainer}>
                        {props.content.eventCoordinator.map(item=>{
                            return(
                                <div className={classes.coordinator}>
                                <div className={classes.coordinatorDetails}>
                                    <p>{item.coordinatorName}</p>
                                    <p>{`+91 ${item.coordinatorPhone}`}</p>
                                </div>
                            <img src={`${BASE_API}${item.photo}`} alt='' className={classes.coordinatorImage}/>
                            </div>
                            )
                        })}
                        
=======
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
>>>>>>> 52f9e7096fd49bfb424241d101b1377d03820c20
                    </div>
                </div>
            </div>
        </div>
    )
}