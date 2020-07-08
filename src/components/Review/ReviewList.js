import React from 'react';
import './ReviewList.css'

function ReviewList({ author, stars, text }) {
    return (
        <div className="reviews">
            <span className="reviewsContainer">
                <h3><b>{author}</b></h3>
                <p>"{text}"</p>
                <p>{stars}/5 stars</p>
            </span>
        </div>
    )
}

export default ReviewList;