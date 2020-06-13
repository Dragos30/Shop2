import React, { Component } from 'react';
import ShopButton from "./ShopButton";
import ShopMenu from "./ShopMenu";

class ShopContainer extends Component {
    render() {
        return (
            <div>
                <ShopButton handleMouseDown={this.handleMouseDown} />
                <ShopMenu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />  
            </div>
        );
    }
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleShopMenu = this.toggleShopMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleShopMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleShopMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

}



export default ShopContainer;