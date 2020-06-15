import React from "react";
import "animate.css/animate.min.css";
import { Slide } from 'react-slideshow-image';
import Item1 from '../Assets/Beach2.jpg';
import Item8 from '../Assets/Melting.jpg';
import Item25 from '../Assets/The Roots.jpg';
import Item19 from '../Assets/The all seeing eye2.jpg';
import Item21 from '../Assets/The ghost.jpg';
import Item22 from '../Assets/The Mind Beyond2.jpg';
import Item23 from '../Assets/The Night.jpg';
import Item27 from '../Assets/The spartan.jpg';
import Item28 from '../Assets/Waterfall2.jpg';
import Item29 from '../Assets/Winter world2.jpg';
import Item30 from '../Assets/Worlds End.jpg';

    const slideImages = [
        Item1,
        Item25,
        Item22,
        Item23,
        Item27,
        Item28,
        Item29,
        Item29,
        Item30,
        Item19,
        Item8,
        Item21
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
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[5]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[6]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[7]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[8]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[9]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[10]})` }}>
                    <span>Welcome</span>
                    <div>
                        <button>Buy now</button>
                        <button> See review</button>
                    </div>
                </div>
            </div>
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${slideImages[11]})` }}>
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