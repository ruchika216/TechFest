import React, { Component, useEffect, useState } from 'react'
import Nav from '../Navbar/Nav'
import gradeintLogo from '../../assets/images/BgLogoGradient.png';
import earth from '../../assets/images/Earth1.png';
import classes from './domain.module.css'
import { API } from '../../Utils/backend.js';
import img1 from '../../assets/images/bg4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {Button} from '@material-ui/core'
import { CSSTransition, Transition } from 'react-transition-group';
import { ExploreEvents } from './ExploreEvents/ExploreEvents';

class Domain extends Component{
    
    constructor(props){
        super(props);
        this.eventRef=React.createRef();
    }
    settings={
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        lazyLoad: 'progressive',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow:3,
                slidesToScroll:2,
                swipeToSlide:true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                swipeToSlide:true,
                slidesToScroll:1,
              }
            }
          ]
    }

    state={
        domains:[],
        currentDomain:{
            domainName:'Domains',
            domainDescription:'Unleash your inner technocrat & Participate in numerous events',
        },
        currentSelected:-1,
        exploreEvents:false,
        animate:false
    }

    componentDidMount(){
        this.getDomains();
    }

    getDomains=()=>{
        axios.get(`${API}/domains`)
        .then(response=>{
            this.setState({domains:response.data})
        }).catch(err=>{
            alert(err.response)
        })
    }

    
    render(){
        return(
            <div className={classes.container}>
                <Nav/>
                
                {/* <img src={earth} alt='' className={classes.earthImage}/> */}
                <img src={this.state.exploreEvents?this.state.currentDomain.photo:gradeintLogo} alt=''className={classes.displayImage}/>
                <div className={classes.content}>
                        <CSSTransition
                            in={this.state.animate}
                            timeout={500}
                            classNames={classes.animate}
                            onExit={()=>this.setState({animate:false})}
                        >
                        <div className={classes.text}>
                            <h1>{this.state.currentDomain.domainName}</h1>
                            <p>
                                {this.state.currentDomain.domainDescription}
                            </p>
                        </div>
                        </CSSTransition>
                        {this.state.exploreEvents?<button className={classes.btnExploreEvents} onClick={()=>{this.eventRef.current.scrollIntoView()}}>Explore Events</button>:null}
                        {this.state.exploreEvents?
                        <div className={classes.coordinators}>
                            <div className={classes.facultyCoordinator}>
                                <img src={this.state.currentDomain.facultyCoordinator[0].photo} alt='' className={classes.facultyCoordinatorImage}/>
                                <div>
                                    <h6>{this.state.currentDomain.facultyCoordinator[0].coordinatorName}</h6>
                                    <p>{this.state.currentDomain.facultyCoordinator[0].coordinatorDesignation}</p>
                                </div>
                            </div>
                            <div className={classes.domainCoordinator}>
                                {this.state.currentDomain.studentCoordinator.map((item,pos)=>{
                                    return(
                                        <div className={classes.facultyCoordinator}>
                                            <div>
                                                <h6>{item.coordinatorName}</h6>
                                                <p>{item.coordinatorPhone}</p>
                                            </div>
                                            <img src={item.photo} alt='' className={classes.facultyCoordinatorImage}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        :null}
                        <div className={classes.cardContainer}>
                            <div className={classes.cardHeadingContainer}>
                                <p>Domains</p>
                                <hr/>
                            </div>
                            <Slider {...this.settings} >
                                {this.state.domains.map((item,pos)=>{
                                    return(
                                        <div className={classes.cardRoot} key={item.id} onClick={()=>{this.setState({currentDomain:item,exploreEvents:true,animate:true,currentSelected:pos})}}  >
                                            <div className={[classes.cardContent,this.state.currentSelected===pos?classes.active:null].join(" ")}>
                                                <img src={item.photo} alt='' className={classes.cardImage}/>
                                                <div className={classes.cardData}>
                                                    <h4>{item.domainName}</h4>
                                                    <p>{item.domainDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                </div>
                {this.state.exploreEvents?<div ref={this.eventRef}><ExploreEvents/><ExploreEvents/></div>:null}
                
                {/* <img src={gradeintLogo} alt='' className='rightlogo1'/> */}
            </div>
        );
    }
}

export default Domain