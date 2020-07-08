import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewList from "../Review/ReviewList";

function Carousel({reviews}) {
    console.log("reviews ", reviews);
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true
    };

    return (
        <Slider {...settings}>
            {reviews.map(review => <ReviewList key={review.text} {...review} />)}
        </Slider>
    );
}

const mapStateToProps = state => ({
    reviews: state.reviews.reviews
});

export default connect(mapStateToProps)(Carousel);