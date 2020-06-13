import React from 'react';
import './CardContainer.css';
import ShopButton from '../shop-container/ShopButton';

function CardContainer({ imageUrl, title, subtitle, price }) {
    return (
        <div className="wrapper" onClick={() => console.log('click pe', title)}>
            <div className="star-frame" onClick={() => console.log('click pe', )}>
                <i className="star outline icon"></i>
            </div>
            <div className="imgContainer">
                <img src={imageUrl} />
            </div>
            <div className="text">
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
                <span className="price">{price}</span>
            </div>
            <div className="i-frame" onClick={() => console.log('click pe', ShopButton)}>
                <i className="plus icon"></i>
            </div>
            
        </div>
    )
}

export default CardContainer;