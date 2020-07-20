import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShop } from '../actions/shopActions';

class ShowProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexClicked: null
    }
  }
  
  handleClick = (id) => {
    this.props.addToShop(id);
      this.setState({
        indexClicked: id
      })
    }
  

  render() { 
      let productsList = this.props.products.map(product => {
        return (
          <div className="wrapper" key={product.id}>
            <div className="imgContainer">
              <img alt={product.title} src={product.img} />
              <span className="card-title"><b><h3>{product.title}</h3></b>
              </span>            
            </div>
            <div className="text">
              <p>{product.type}</p>
              <p>{product.category}</p>
              <p>{product.desc}</p>
              <p className="productPrice" ><b>Price: {product.price}$</b></p>      
              <input type="button"
                className="Add"
                disabled={this.state.indexClicked === product.id}
                value={this.state.indexClicked === product.id ? "Added" : "+"}
                onClick={() => { this.handleClick(product.id) }} />
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