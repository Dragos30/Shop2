import React from "react";
import "animate.css/animate.min.css";
import { Slide } from 'react-slideshow-image';

    const slideImages = [
        "/Assets/Beach2.jpg",
        "/Assets/Moonlight2.jpg",
        "/Assets/paint5.jpg"
    ];

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
}
const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
                </div>
        </Slide>
    );
}


export default Slideshow;