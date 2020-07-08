import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../actions/shopActions';
import ShopMenu from './ShopMenu';
import FlipMove from 'react-flip-move';
import Slide from 'react-reveal/Slide';
import CheckoutModal from '../Checkout/CheckoutModal';
import './Shop.css';

class Shop extends Component {
    
    //to remove the product completely
    handleRemove = (id) => {
        this.props.removeProduct(id);
    }
    render() {
            let addedProducts = this.props.products.length ? (
                this.props.products.map(product => {
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
                    <h3>Nothing in your Shop!</h3>
                )
        
           
        return (
                <div className="shop">
                    <ShopMenu />
                    <Slide left cascade>
                        <h1>Wish List</h1>
                        <span className="collection-item">
                            <h2>Your Total is:<b> {this.props.total} $</b></h2>
                        </span>
                        <CheckoutModal/>
                        <div className="addedProducts-container">
                            <FlipMove duration={250} easing="ease-out">
                                {addedProducts}
                            </FlipMove>
                        </div>
                    </Slide>
                </div>
            );
        }
    }
const mapStateToProps = (state) => {
    return {
        products: state.products.addedProducts,
        total: state.products.total,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => { dispatch(removeProduct(id)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Shop)

