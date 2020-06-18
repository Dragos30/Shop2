import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShop } from '../actions/shopActions';
import ImageList from '../SearchBar/ImageList';

class Contact extends Component {
    state = { images: [] };
    handleClick = (id) => {
        this.props.addToShop(id);
    }
    render() {
        let productsList = this.props.products.map(product => {
            if (product.type === "acrylic")
                return (
                    <div className="wrapper" key={product.id} >
                        <div className="star-frame">
                            <i className="star outline icon"></i>
                        </div>
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
                            <p>{product.desc}</p>
                            <p><b>Price: {product.price}$</b></p>
                        </div>
                    </div>

                )

        })
        return (
            < div id="home" >
                <div className="container">
                    <h1 className="center">Acrylic Paintings</h1>
                    <div className="box">
                        {productsList}
                    </div>
                    <ImageList images={this.state.images} />
                </div>
            </ div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToShop: (id) => { dispatch(addToShop(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

  
   