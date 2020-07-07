import React from 'react';
import { connect } from 'react-redux';
import './ReviewList.css'

function ReviewList({ reviews }) {

    return (
        <div>
        {reviews.map(review =>
                <ul className="box">
                    <li key={review.list} id={review.list} className="reviews">
                        <span className="reviewsContainer">
                            <h3><b>{review.author}</b></h3>
                            <p>"{review.text}"</p>
                        </span>
                    </li>
                </ul>
            )
            }
        </div>
    )
    }

const mapStateToProps = state => ({
    reviews: state.reviews.reviews
})   
 
export default connect(mapStateToProps)(ReviewList);