import React, { Component } from "react";
import { Link } from "@reach/router";
import "./ShopMenu.css";


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
                  
                           Your orders
                             
                   
                    </Link>   
                    
              
             
                <Link to={"/"}>
                
                           Wish list
                             
               
                </Link> 
           
               
                <Link to={"/"}>
               
                       
                            Account
                             
                 
                </Link>  
            
         
                <Link to={"/"}>
                 
                            Checkout
                             
                   
                </Link> 
                   
                </nav>
            </div>
        );
    }
}

export default ShopMenu;