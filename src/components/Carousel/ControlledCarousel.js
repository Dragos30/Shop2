import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewList from "../Review/ReviewList";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>                 
                    <ReviewList/>                      
                    </div>
                    <div>
                        <ReviewList />
                    </div>
                    <div>
                        <ReviewList />
                    </div>
                    <div>
                        <ReviewList />
                    </div>
                </Slider>
            </div>
        );
    }
}