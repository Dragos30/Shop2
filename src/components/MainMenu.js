import React from "react";
import { Link } from "@reach/router";
import "../Style/MainMenu.css";

function MainMenu() {
    return (
        <nav >
            <ul id="main">
                <li>
                    <Link to={"/"}>
                        Home
                                </Link>
                </li>
                <li>
                        <Link to={"/about"}>
                            About
                                </Link>
                    </li>
                    <li >
                        <Link to={"/portfolio"}>
                            Portfolio
                                </Link>
                    </li>
                    <li >
                        <Link to={"/contact"}>
                            Contact
                                </Link>
                    </li>

       </ul>
    </nav>
    );
}
export default MainMenu;