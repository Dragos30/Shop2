import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShop } from '../actions/shopActions';
import Slideshow from '../Slideshow-container/Slideshow';
          
class Home extends Component  {   
    
    handleClick = (id) => {
        this.props.addToShop(id);
    }
    render() {
     let itemList= this.props.items.map(item => {
            return (
                <div className="wrapper" key={item.id}>
                <div className="star-frame">
                    <i className="star outline icon"></i>
                </div>
                <div className="imgContainer">
                        <img alt={item.title} src={item.img} />
                        <span className="card-title"><b><h3>{item.title}</h3></b></span>
                        <span to="/" className="i-frame" onClick={() => { this.handleClick(item.id) }}>
                            <i className="plus icon"></i>
                        </span>
                </div>
                <div className="text">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>

            )
        })

        return (
            < div id="home" >
            <div className="container">
                    <h1 className="center">Canvas Paintings</h1>
                    <Slideshow/>
                <div className="box">
                    {itemList}
                </div>
                </div>
                </ div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
        const mapDispatchToProps = (dispatch) => {

            return {
                addToShop: (id) => { dispatch(addToShop(id))}
            }
        }

export default connect( mapStateToProps, mapDispatchToProps )(Home);