import React from 'react';
import { addReview } from '../actions/reviewAction';
import { connect } from 'react-redux';

function ReviewForm({ onSubmit} ) {
    const handleSubmit = event => {
        event.preventDefault();
        const { reviewText, reviewAuthor}  = event.target;
        console.log("reviewText", reviewText.value);
        console.log("reviewAuthor", reviewAuthor.value);
        
        onSubmit({
            author: reviewAuthor.value,
            text: reviewText.value
        });
    }
    return (
        <div className="reviewForm">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder='name' name="reviewAuthor" />
                <input type="text" palceholder='text' name="reviewText" />
                <input id="submit" type="submit"/>
        </form>
     
        </div>
    )
}   


const mapDispatchToProps = dispatch => ({
    onSubmit: payload  => dispatch(addReview(payload))
})
            
export default connect(null,mapDispatchToProps )(ReviewForm);