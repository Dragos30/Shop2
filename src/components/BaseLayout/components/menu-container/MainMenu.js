import React from "react";
import { Link } from "@reach/router";
import "./MainMenu.css";

class MainMenu extends React.Component {
    render() {
        return (
            <nav >
                <ul id="main">
                    <li>
                        <Link to={"/shop"}>
                            Shop
                                </Link>
                    </li>
                    <li>
                        <Link to={"/products?"}>
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
                        <Link to={"/login"}>
                            <i className="user circle icon">Login</i>                          
                                </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default MainMenu;