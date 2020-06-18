//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
//Internals
import products from '../data/products';
import { connect } from 'react-redux';

class ShowProduct extends Component {
  render() {
      const product = find(products, ['id', parseInt(this.props.match.params.id)]);
    const currentProduct = product;
    let productsList = this.props.products.map(product => {
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
                <span to="/" className="i-frame">
                  <span className="i-frame" onClick={() => { this.handleClick(product.id) }}>
                    <i className="plus icon"></i>
                  </span>
                </span>
              </div>
              <div className="text">
                <p>{currentProduct.desc}</p>
                <p><b>Price: {currentProduct.price}$</b></p>
              </div>
            </div>
          </div>
        );
      }
    });
        return(
      <div className="wrapper" key={product.id} >
        <div className="star-frame">
          <i className="star outline icon"></i>
        </div>
        <div className="imgContainer">
          <img alt={product.title} src={product.img} />
          <span className="card-title"><b><h3>{product.title}</h3></b>
          </span>
          <span>
            <addButton />
          </span>
        </div>
        <div className="text">
          <p>{product.desc}</p>
              <p><b>Price: {product.price}$</b></p>
            </div>
            <div className="box">
              {productsList}
            </div>
        </div>
          
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
      
export default connect(mapStateToProps )(ShowProduct);
