import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';

import './ReviewModal.css';
import StarRating from "./StarRatings";
import { Modal } from 'react-bootstrap';
import ReviewForm from "./ReviewForm";    
    
import { addReview } from '../actions/reviewAction';

function ReviewModal({ onSubmit}) {
    const [show, setShow] = useState(false);
    const [starsSelected, setStarsSelected] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnSubmit = ({ author, text }) => {
        onSubmit({
            author,
            text,
            stars: starsSelected
        });

        handleClose();
        setStarsSelected(0);
    }

    return (
        <Fragment>
            <span id="openReview" onClick={handleShow}>
                <h5>How was your experience?</h5>
                <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>      
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Leave a Review!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StarRating
                        starsSelected={starsSelected}
                        setStarsSelected={setStarsSelected}
                    />
                    <p>{starsSelected} of 5 stars</p>
                    <ReviewForm handleOnSubmit={handleOnSubmit} />
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    onSubmit: payload => dispatch(addReview(payload))
});

export default connect(null, mapDispatchToProps)(ReviewModal);