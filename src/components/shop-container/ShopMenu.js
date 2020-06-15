import React, { Component } from "react";
import { Link } from "@reach/router";
import "./ShopMenu.css";


class ShopMenu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <ul id="flyoutShopMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>      

                    <li>
                        <Link to={"/"}>
                            Your Orders
                                </Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>
                            Wish List
                                </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                           Account
                                </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                            Checkout
                                </Link>
                    </li>
                   
                </ul>
        );
    }
}

export default ShopMenu;