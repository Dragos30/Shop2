import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Menu.css";

class Menu extends Component {
    render() {
       let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <ul id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>   
                <li>
                    <Link to="/shop">
                        Shop
                                </Link>
                </li>
                <li>
                    <Link to="/products?">
                        Canvas
                                </Link>
                </li>
                <li>
                    <Link to="/products?type=oil">
                        Oil
                                </Link>
                </li>
                <li >
                    <Link to="/products?type=mixed">
                        Mixed
                                </Link>
                </li>
                <li >
                    <Link to="/products?type=acrylic">
                        Acrylic
                                </Link>
                </li>
                <li >
                    <Link to="/login">
                        <i className="user circle icon">Login</i>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default Menu;