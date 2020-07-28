import React from 'react';
import './PaymentForm.css'
import PaymentInputs from './PaymentInputs';

class PaymentForm extends React.Component {
    render() {
        return (
            <div className="payContainer">
                <form >
                    <input type="text" placeholder="Name on card" />
                    <input type="text" placeholder="Address" />
                    <PaymentInputs />
                    <span>
                        <i className="fa fa-cc-mastercard"></i>
                        <i className="fa fa-cc-visa"></i>
                        <i className="fa fa-cc-amex"></i>
                        <i className="fa fa-cc-paypal"></i>
                    </span>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default PaymentForm;