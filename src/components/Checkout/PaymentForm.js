import React from 'react';
import './PaymentForm.css'
import PaymentInputs from './PaymentInputs';

function PaymentForm(onSubmit) {
    const handleSubmit = event => {
        const { productPrice } = event.target;
        onSubmit({
            // productPrice: productPrice::before = productPrice::after
        });
        event.preventDefault();
    }
        return (
            <div className="payContainer">
                <form>                   
                    <input type="text" placeholder="Name on card"/>                 
                    <input type="text" placeholder="Address" />                  
                   <PaymentInputs />                 
                    <span>
                        <i className="fa fa-cc-mastercard"></i>
                        <i className="fa fa-cc-visa"></i>
                        <i className="fa fa-cc-amex"></i>
                        <i className="fa fa-cc-paypal"></i>
                    </span>
                    <input type="submit" onSubmit={handleSubmit}/>
                </form>
            </div>
        )
}

export default PaymentForm;