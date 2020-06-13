import React, { Component } from "react";
import "./ShopButton.css";

class ShopButton extends Component {
    render() {
        return (
            
            <button className="toggle-shopbutton"
                onMouseDown={this.props.handleMouseDown}> 
                <div className="toggle-shopbutton_line"><p>Shop</p></div>
                <div className="toggle-shopbutton_line"></div>
                <div className="toggle-shopbutton_line"></div>
            </button>

        );
    }
}

export default ShopButton;
