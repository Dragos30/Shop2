import React, { Component } from 'react';
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import MainMenu from './MainMenu';

class MenuContainer extends Component {
    render(){
    return (    
        <div>           
            <MainMenu />
            <MenuButton handleMouseDown={this.handleMouseDown} />
            <Menu handleMouseDown={this.handleMouseDown}
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
    this.toggleMenu = this.toggleMenu.bind(this);
}

handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
}

toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
}
   
}

   

export default MenuContainer;