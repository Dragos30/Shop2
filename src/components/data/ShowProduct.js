import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShop } from '../actions/shopActions';

class ShowProduct extends Component {
  state = { images: [] };
  state = { color: [] };
  handleClick = (id) => {
    this.props.addToShop(id);
  }
  render() {    
  
    let productsList = this.props.products.map(product => {
      return (
        <div className="wrapper" key={product.id}>
          {/* <div className="star-frame">          
            <span><i className="fa fa-star-o" aria-hidden="true"></i></span>         
          </div> */}
            <div className="imgContainer">
              <img alt={product.title} src={product.img} />
              <span className="card-title"><b><h3>{product.title}</h3></b>
              </span>
              <span to="/" className="i-frame">
                <span className="i-frame" onClick={() => { this.handleClick(product.id) }}>
                  <i className="plus icon"></i>
                </span>
              </span>
          </div>
            <div className="text">
              <p>{product.type}</p>
              <p>{product.category}</p>
              <p>{product.desc}</p>
              <p><b>Price: {product.price}$</b></p>
          </div>
          <div>
          </div>
          </div>
        )
    })
    return (
        <div id="showproduct" >
          <div className="box">
            {productsList}
          </div>
        </div>
      )
    }
}
const mapStateToProps = (state, { location = {} }) => {
  const urlParams = new URLSearchParams(location.search);
  const category = urlParams.get('category');
console.log("category ", category);
  const type = urlParams.get('type');
  console.log("type ", type);
  return {
    products: state.products.products.filter(product => {
      if (category && type) return category === product.category && type === product.type;
      if (category) return category === product.category;
      if (type) return type === product.type;
      return product;
    })
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToShop: (id) => {
      dispatch(addToShop(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);