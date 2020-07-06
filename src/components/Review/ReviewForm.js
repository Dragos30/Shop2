import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { addReview } from '../actions/reviewAction';
import { connect } from 'react-redux';

function ReviewForm( reviews, onSubmit) {
    const handleSubmit = event => {
        const { reviewText } = event.target.value;
        console.log("reviews", reviews.value);
        onSubmit({
            review: reviewText.value
        })
        event.preventDefault();
    }
    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <Form.Text as="textarea" rows="3" name="reviewText" placeholder="Type your review here..." >
            <Button variant="primary" value="submit" type="submit">
                Submit</Button>
            </Form.Text>
        </Form>
         {reviews.map(review =>
            <ul key={review.id} className="reviewList">
                 <li key={review.list}>
                    <p>{review}</p>
                </li>
            </ul>
        )};
               </div>
    )
}   
const mapStateToProps = state => ({
    reviews: state.reviews
})
const mapDispatchToProps = dispatch => ({
    onSubmit: payload  => dispatch(addReview(payload))
})
            
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);