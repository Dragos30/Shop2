import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux'; 
import { addProduct } from '../actions/shopActions';

function Dashboard({ products, onSubmit}) {
    // până acum am luat datele din store și le-am afișat mai jos pe linia 24
    // acum am adăugat un formular, și vrem să adăugăm un nou produs în store
    const handleSubmit = event => {
        const { productName } = event.target;
        const { productCategory } = event.target;
        const { productType } = event.target;
        const { productSize } = event.target;
        const { productPrice } = event.target;
        const { productImage } = event.target;
        
        console.log("productCategory", productCategory.value);
        console.log("productType ", productType.value);
        console.log("productSize ", productSize.value);
        console.log("productPrice ", productPrice.value);
        console.log("productImage ", productImage.value);

        onSubmit({
            title: productName.value,
            type: productType.value,
            category: productCategory.value,
            desc: productSize.value,
            price: productPrice.value,
            img: productImage.value
        });

        event.preventDefault();
    }

    return (
        <div className="showproduct">           
            <form onSubmit={handleSubmit}>
                <h4>Product</h4>
                <input type="text" placeholder='name' name="productName"/>
                <input type="text" placeholder='category' name="productCategory"/>
                <input type="text" placeholder='type' name="productType"/>
                <input type="text" placeholder='size' name="productSize"/>
                <input type="text" placeholder='price' name="productPrice"/>
                <input id="add" type="file" placeholder='image' name="productImage"/>            
                <input id="submit" type="submit" />
            </form>
            <div id="stats">
                <h4>Statistics</h4>
                <div id="red"><p>All</p></div>
                <div id="blue"><p>Abstract</p></div>
                <div id="yellow"><p>Nature</p></div>
            </div>
            {products.map(product =>
                <ul key={product.id} className="productList">              
                <li>
                    <p>{product.title}</p>
                    <p>{product.type}</p>
                    <p>{product.category}</p>
                    <p>{product.desc}</p>
                    <p> {product.price}</p>
                        <span>edit/remove</span>
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    onSubmit: payload => dispatch(addProduct(payload))
})

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);