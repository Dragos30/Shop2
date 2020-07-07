import React, { useState } from 'react';
import ReviewList from '../Review/ReviewList';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <ReviewList />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;