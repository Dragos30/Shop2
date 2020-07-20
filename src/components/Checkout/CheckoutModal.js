import React,{ Fragment, useState }from 'react';
import { Modal } from 'react-bootstrap';
import PaymentForm from './PaymentForm';
import './CheckoutModal';

function CheckoutModal() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <Fragment>  
            <button className="ui small red button" id="openCheckout" onClick={handleShow}>
                Checkout
            </button>
            <Modal className="modal-lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                    <Modal.Title><h5>Please complete your purchase!</h5></Modal.Title>
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
        </Modal.Header>
        <Modal.Body>
          <PaymentForm/>
        </Modal.Body>
            </Modal>
            </Fragment>
    )
}

export default CheckoutModal;