import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Menu.css";


class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <ul id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>   
                <li>
                    <Link to={"/shop"}>
                        Shop
                                </Link>
                </li>
                <li>
                    <Link to={"/"}>
                        Canvas
                                </Link>
                </li>
                <li>
                    <Link to={"/about"}>
                        Oil
                                </Link>
                </li>
                <li >
                    <Link to={"/portfolio"}>
                        Mixed
                                </Link>
                </li>
                <li >
                    <Link to={"/contact"}>
                        Acrylic
                                </Link>
                </li>
                <li>

                    <input type="text" placeholder="Search.."></input>
                    
                        <i className="fa fa-search" aria-hidden="true">
                        </i>

                </li>
            </ul>
        );
    }
}

export default Menu;