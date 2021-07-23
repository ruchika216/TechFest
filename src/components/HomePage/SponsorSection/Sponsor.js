import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import '../Navbar/Navbar.css';
// import "../FeaturedSection/Feature.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function HomeSponsor() {
    return (
        <div className='home-sponsor' style={{ marginTop: '-3px' }}>
            <h1 style={{ textAlign: "center", fontFamily: 'EXO' }}>
                Sponsors

            </h1>
            <div className="main-sponsor">
                <Carousel breakPoints={breakPoints}>
                    <Item>One</Item>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                </Carousel>
            </div>
        </div>
    );
}

export default HomeSponsor;