import React, { useState } from "react";
import './ReviewModal.css';
import StarRating from "./StarRatings";
import { Modal } from 'react-bootstrap';
import ReviewForm from "./ReviewForm";

function ReviewModal() { 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <span id="openReview" onClick={handleShow}>
                <h5>How was your experience?</h5>
                <i className="fa fa-star-o" aria-hidden="true"></i></span>      
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Please Leave a Review!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                    <StarRating />
                </Modal.Body>
                <ReviewForm/>
            </Modal>
        </>
        
        )
}

export default ReviewModal;