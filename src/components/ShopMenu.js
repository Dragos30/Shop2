import React, { Component } from "react";
import { Link } from "@reach/router";
import "../Style/ShopMenu.css";


class ShopMenu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div>
            <nav id="flyoutShopMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>      
                
                <Link to={"/"}>
                  
                           Shopping List
                             
                   
                    </Link>   
                    
              
             
                <Link to={"/about"}>
                
                            Add
                             
               
                </Link> 
           
               
                <Link to={"/portfolio"}>
               
                       
                            Remove
                             
                 
                </Link>  
            
         
                <Link to={"/contact"}>
                 
                            Checkout
                             
                   
                </Link> 
                   
                </nav>
            </div>
        );
    }
}

export default ShopMenu;