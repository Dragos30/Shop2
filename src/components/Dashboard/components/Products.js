import React from 'react';

const Products = () => {
    return (
        <div id="products">
            <h4>Products</h4>
            <div>
                <input placeholder='id'></input>
                <input placeholder='category'></input>
                <input placeholder='type'></input>
                <input placeholder='desc'></input>
                <input placeholder='price'></input>
                <input placeholder='img'></input>
                <button>Add Products</button>
                <button>Remove Products</button>
            </div>
        </div>
    )
}

export default Products;