import React from 'react';
import './StarRatings.css'

const Star = ({ selected = false, onClick = f => f }) =>
    <div className={(selected) ? "star selected" : "star"}
        onClick={onClick}>
    </div>

function StarRating({ starsSelected, setStarsSelected}) {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((_, i) =>
                <Star key={i}
                    selected={i < starsSelected}
                    onClick={() => setStarsSelected(i + 1)}
                />
            )}
        </div>
    );
}

export default StarRating;
