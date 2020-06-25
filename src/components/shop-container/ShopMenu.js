import React from 'react';
import { Link } from "@reach/router";
import "./ShopMenu.css";

const ShopMenu = () => {


    return (
        <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <nav className="dropdown-content">
                <Link to={"/"}>
                    Your Orders
                                </Link>
                <Link to={"/shop"}>
                    Wish List
                                </Link>
                <Link to={"/login"}>
                    Account
                                </Link>
                <Link to={"/"}>
                   Checkout
                                </Link>


            </nav>
        </div>
    );
}

export default ShopMenu;