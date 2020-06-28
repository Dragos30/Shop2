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
      <p><Link  className="nav-link-header" to="/products?">Canvas</Link></p>
      <p><Link className="nav-link-header" to="/products?type=oil">Oil</Link></p>
      <p><Link className="nav-link-header" to="/products?type=mixed">Mixed</Link></p>
      <p><Link className="nav-link-header" to="/products?type=acrylic">Acrylic</Link></p>
    <p><Link  className="nav-link-header" to="/login"> <i className="user circle icon">Login</i></Link></p>
    </div>
  </div>
)

export default Header;
