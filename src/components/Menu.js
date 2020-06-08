import React, { Component } from "react";
import { Link } from "@reach/router";
import "../Style/Menu.css";


class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <nav id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>   
                <Link to={"/"}>
                  
                            Home
                             
                   
                    </Link>   
                    
              
             
                <Link to={"/about"}>
                
                            About
                             
               
                </Link> 
           
               
                <Link to={"/portfolio"}>
               
                       
                            Portfolio
                             
                 
                </Link>  
            
         
                <Link to={"/contact"}>
                 
                            Contact
                             
                   
                </Link> 
                   
            </nav>
        );
    }
}

export default Menu;