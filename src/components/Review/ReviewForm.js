import React from 'react';
import { addReview } from '../actions/reviewAction';
import { connect } from 'react-redux';

function ReviewForm( reviews, onSubmit) {
    const handleSubmit = event => {
        const[{ reviewText },{reviewAuthor}]  = event.target.value;
        console.log("reviewText", reviewText.value);
        console.log("reviewAuthor", reviewAuthor.value);
        onSubmit({
            author: reviewAuthor.value,
            text: reviewText.value         
        })
        event.preventDefault();
    }
    return (
        <div className="reviewForm">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder='name' name="reviewAuthor" />
                <input type="text" palceholder='text' name="reviewText" />
                <input id="submit" type="submit"/>
        </form>
         {reviews.map(review =>
            <ul key={review.id} className="reviewList">
                 <li key={review.list} id={review.list}>
                     <p>{review.author}</p>
                     <p>{review.text}</p>
                </li>
            </ul>
        )};
        </div>
    )
}   
const mapStateToProps = state => ({
        reviews: state.reviews.reviews
    })

const mapDispatchToProps = dispatch => ({
    onSubmit: payload  => dispatch(addReview(payload))
})
            
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);