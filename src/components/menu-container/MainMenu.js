import React from "react";
import { Link } from "@reach/router";
import "./MainMenu.css";

function MainMenu() {
    return (
        <nav >
            <ul id="main">
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
                    <button> <i className="fa fa-search" aria-hidden="true"></i></button>
                    
                </li>

       </ul>
    </nav>
    );
}
export default MainMenu;