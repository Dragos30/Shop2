import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/shopActions';
import Recipe from '../Recipe';
import ShopContainer from './ShopContainer';

class Shop extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    render() {

        let addedItems = this.props.items.length ?(
                this.props.items.map( item => {
                    return (
                        <li className="list" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <span className="subtitle">{item.subtitle}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <button className="ui red button" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <h1>Nothing in your Shop!</h1>
            )
        return (
            <div id="shop">
                <div className="content">
                    <h1>Wish List</h1>
                    <ShopContainer />
                    <ul className="list">
                        {addedItems}
                    </ul>
                    <Recipe/>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Shop)

