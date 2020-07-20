import React, { useState, useEffect }  from 'react';
import './PaymentForm.css'
import PaymentInputs from './PaymentInputs';

function PaymentForm(onSubmit) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick(){
        if (isClicked === true) {
            if (!isClicked) setIsClicked(false);
        } else {
            if (!isClicked) setIsClicked(true);
        }
    }
      

useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
        window.removeEventListener('click', handleClick);
    }
}, );
        return (
            <div className="payContainer">
                <form onSubmit={handleClick}>                   
                    <input type="text" placeholder="Name on card"/>                 
                    <input type="text" placeholder="Address" />                  
                   <PaymentInputs />                 
                    <span>
                        <i className="fa fa-cc-mastercard"></i>
                        <i className="fa fa-cc-visa"></i>
                        <i className="fa fa-cc-amex"></i>
                        <i className="fa fa-cc-paypal"></i>
                    </span>
                    <input type="submit" value={this.state.handleClick}/>
                </form>
            </div>
        )
}

export default PaymentForm;