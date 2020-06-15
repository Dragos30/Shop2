import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/shopActions';
import Recipe from '../Recipe';

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
                <b> <p>Nothing in your Shop!</p></b>
            )
        return (
            <div id="shop">
                <div>
                    <h1>Wish List</h1>
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

