import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
    render() {
        return (
            <button className="toggle-button"
                onMouseDown={this.props.handleMouseDown}>
                <div className="toggle-button_line"><p>Menu</p></div>
                <div className="toggle-button_line"></div>
                <div className="toggle-button_line"></div>
                </button>
           
        );
    }
}

export default MenuButton;
