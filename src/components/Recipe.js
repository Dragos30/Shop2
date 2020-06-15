import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipe extends Component{
    

    render(){
  
        return(
            <div className="ui container">
                <div className="ui collection">
                    <li className="ui collection-item">
                        </li>
                    <li className="collection-item">
                        <b> <b>Total to pay: {this.props.total} $</b></b>
                    </li>
                    </div>
                    <div className="checkout">
                        <button className="ui red button">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Recipe);
