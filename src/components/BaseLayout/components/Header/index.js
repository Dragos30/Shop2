//Dependencies
import React from 'react';
//Internals
import './index.css';
import { Link } from '@reach/router';

const Header = () => (
  <div className="header">  
    <h1>Gallery</h1>
    <div className="header-links">
    <p><Link  className="nav-link-header" to="/shop">Shop</Link></p>
    <p><Link  className="nav-link-header" to="/">Canvas</Link></p>
    <p><Link  className="nav-link-header" to="/about">Oil</Link></p>
    <p><Link  className="nav-link-header" to="/portfolio">Mixed</Link></p>
    <p><Link  className="nav-link-header" to="/contact">Acrylic</Link></p>
    <p><Link  className="nav-link-header" to="/login"> <i className="user circle icon">Login</i></Link></p>
    </div>
  </div>
)

export default Header;
