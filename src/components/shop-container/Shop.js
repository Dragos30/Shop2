import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../actions/shopActions';
import Recipe from '../Recipe';
import ShopContainer from './ShopContainer';

class Shop extends Component {

    //to remove the product completely
    handleRemove = (id) => {
        this.props.removeProduct(id);
    }

    render() {
        let addedProducts = this.props.products.length ?(
                this.props.products.map( product => {
                    return (
                        <div className="wrapper" key={product.id} >
                            <div className="imgContainer">
                                <img alt={product.title} src={product.img} />
                                <span className="card-title"><b><h3>{product.title}</h3></b>
                                </span>
                            </div>
                            <div className="text">
                                <p>{product.desc}</p>
                                <p><b>Price: {product.price}$</b></p>
                                <button className="ui red button" onClick={() => { this.handleRemove(product.id) }}>Remove</button>
                            </div>
                        </div>
                        
                    )
                })
            ) :

            (
                <h1>Nothing in your Shop!</h1>
            )
        return (
            <ShopContainer>
                <div>
                    {addedProducts}
                </div>
                <div>
                    <Recipe/>
                </div>
            </ShopContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedProducts, 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => { dispatch(removeProduct(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Shop)

