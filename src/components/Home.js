import React from "react";
import "animate.css/animate.min.css";
import Footer from "./Footer";
import ShopButton from "./ShopButton";

const Home = () => {
    return (     
            <div id="header">
            <div id="intro">
            <h1>Welcome</h1>
                <div id="row">
                    <button>Buy now</button>
                    <button> See review</button>
           </div>
            </div>
            <Footer/>
        </div>  
          
  );
}


export default Home;