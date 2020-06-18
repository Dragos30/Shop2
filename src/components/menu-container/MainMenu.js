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
                    {/* <li>
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </li> */}

                </ul>
            </nav>
        );
    }
}
export default MainMenu;