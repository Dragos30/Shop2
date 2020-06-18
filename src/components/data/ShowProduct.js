//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
//Internals
import products from '../data/products';

class ShowProduct extends Component {
  render() {
    const product = find(products, ['id', parseInt(this.props.match.params.id)]);
    const currentProduct = product; 
    if (product.category === currentProduct.category
      && product.type === currentProduct.type
      && product.title !== currentProduct.title) {
      return (
        <div className="show-product">
          <div className="wrapper">
            <div className="star-frame">
              <i className="star outline icon"></i>
            </div>
            <div className="imgContainer">
              <img className="product-image" src={currentProduct.img} alt="product" />
              <span className="card-title"><b><h3>{currentProduct.title}</h3></b></span>
            </div>
            <div className="text">
              <p>{currentProduct.desc}</p>
              <p><b>Price: {currentProduct.price}$</b></p>
            </div>
          </div>
        </div>
      );
    }
  }
}     
export default ShowProduct;
