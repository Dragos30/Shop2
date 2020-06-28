import React from 'react';
import { Link } from "@reach/router";
import "./Categories.css";

const Categories = () =>  {


        return (
            <div className="dropdown">
                <button className="dropbtn">
                    Categories
        </button>
              <nav className="dropdown-content">
                    <Link to="/products?category=nature">
                        Nature
                                </Link>
                    <Link to="/products?category=abstract">
                        Abstract
                                </Link>
                </nav>
            </div>
        );
}

export default Categories;

