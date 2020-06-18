import React from 'react';
import products from '../data/products';
import productsList from '../data/ShowProduct';

const Abstract =()=> {
    if (products.category === "abstract") {
        return (
            < div id="abstract" >
                <h1>Abstract Paintings</h1>
                <div className="container">
                    <h1 className="center">Oil Paintings</h1>
                    <div className="box">
                        {productsList}
                    </div>
                </div>
            </ div>
        );
        }
    }

    export default Abstract;
