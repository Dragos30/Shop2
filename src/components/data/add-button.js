import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToShop from '../actions/shopActions';
import product from './products';

class addButton extends Component {
    handleClick = (id) => {
        this.props.addToShop(id);
        return (

                <span className="i-frame" onClick={() => { this.handleClick(product.id) }}>
                    <i className="plus icon"></i>
            </span>
        )
    }
}
    const mapDispatchToProps = (dispatch) => {

        return {
            addToShop: (id) => { dispatch(addToShop(id)) }
        }
} 
    
export default connect(mapDispatchToProps)(addButton);