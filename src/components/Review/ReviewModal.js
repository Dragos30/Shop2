import React, { useState } from "react";
import './ReviewModal.css';
import StarRating from "./StarRatings";
import { Modal, CarouselItem } from 'react-bootstrap';
import ReviewForm from "./ReviewForm";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
    
    
function ReviewModal({ reviews }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
        <>
            <span id="openReview" onClick={handleShow}>
                <h5>How was your experience?</h5>
                    <i className="fa fa-star-o" aria-hidden="true"></i></span>     
                <Carousel>
            {reviews.map(review =>                
                <ul className="reviewList">    
                    <li key={review.list} id={review.list}>
                        
                            <CarouselItem>                     
                            <h2>Reviews</h2>
                            <h3><b>{review.author}</b></h3>
                                <p>"{review.text}"</p>               
                        </CarouselItem>
                      
                        </li>             
                        </ul>
                  
            )}
                </Carousel>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Leave a Review!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StarRating />
                </Modal.Body>
                <ReviewForm />
            </Modal>
        </>
    );
}
    
const mapStateToProps = state => ({
    reviews: state.reviews.reviews
})

export default connect(mapStateToProps) (ReviewModal);