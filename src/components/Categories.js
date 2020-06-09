import React from 'react';
import { Link } from "@reach/router";
import "../Style/Categories.css";

const Categories = () =>  {


        return (
            <div className="dropdown">
                <button className="dropbtn">
                    Categories
        </button>
              <nav className="dropdown-content">
                    <Link to={"/nature"}>
                        Nature
                                </Link>
                    <Link to={"/abstract"}>
                        Abstract
                                </Link>
                    <Link to={"/portraits"}>
                        Portraits
                                </Link>
                     
                </nav>
            </div>
        );
}

export default Categories;
