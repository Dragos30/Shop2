import React from "react";
import './ReviewModal.css';
import StarRating from "./StarRatings";

class ReviewModal extends React.Component {
    render() {
        if (!this.props.show) {
            return this.state;
        }
        return (
            <div id="reviewModal">
                <h5>Please Leave a Review</h5>
                <StarRating />
                <form>
                <textarea placeholder="Write your review here..." />    
                    <input type="submit" />
                </form>
            </div>
            
        )
    }
}
export default ReviewModal;