import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToShop } from '../actions/shopActions';
import Slideshow from '../Slideshow-container/Slideshow';
          
class Home extends Component  { 
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        }
        this.toggleComplete = this.toggleComplete.bind(this);
    }
        toggleComplete() {
            this.setState(prevState => ({
                complete: !prevState.complete
            }));
        }
        handleClick = (id) => {
            this.props.addToShop(id);
        }
    
    render() {
        let itemList = this.props.items.map(item => {
                const incompleteIcon = <span><i className="plus icon"></i></span>;
                const completeIcon = <span><i className="minus icon"></i></span>;
                return (
                    <div className="wrapper" key={item.id} onClick={() => { this.handleClick(item.id) }}>
                        <div className="star-frame">
                            <i className="star outline icon"></i>
                        </div>
                        <div className="imgContainer">
                            <img alt={item.title} src={item.img} />
                            <span className="card-title"><b><h3>{item.title}</h3></b></span>
                            <span to="/" className="i-frame">
                                <span className="i-frame" onClick={this.toggleComplete}>{this.state.complete ? completeIcon : incompleteIcon}</span>
                                <span className="i-frame">{this.props.item}</span>
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