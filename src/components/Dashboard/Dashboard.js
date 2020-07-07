import React, {useState} from 'react';
import { connect } from 'react-redux'; 
import { addProduct, removeItem } from '../actions/shopActions';
import './Dashboard.css';

function Dashboard({ products, onSubmit, handleRemove }) {
    const [imageBase64, setImageBase64] = useState('');
    // până acum am luat datele din store și le-am afișat mai jos pe linia 24
    // acum am adăugat un formular, și vrem să adăugăm un nou produs în store
    const handleSubmit = event =>{

        const { productName, productCategory, productType, productPrice, productSize, productId } = event.target;

        console.log("productName", productName.value);
        console.log("productCategory", productCategory.value);
        console.log("productType ", productType.value);
        console.log("productSize ", productSize.value);
        console.log("productPrice ", productPrice.value);
        console.log("productId", productId.value);
    
        onSubmit({
            id: Date.now(),
            title: productName.value,
            type: productType.value,
            category: productCategory.value,
            desc: productSize.value,
            price: parseInt(productPrice.value),
            img: imageBase64
        });
            event.preventDefault();
        
    }
       
    
    function encodeImageFileAsURL(element) {
        const file = element.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            setImageBase64(reader.result)
        }
        reader.readAsDataURL(file);
    }
        return (
            <div className="showproduct">
                <form onSubmit={handleSubmit}>
                    <h4>Product</h4>               
                    <input type="text" placeholder='id' name="productId"/>
                    <input type="text" placeholder='name' name="productName" />
                    <input type="text" placeholder='category' name="productCategory" />
                    <input type="text" placeholder='type' name="productType" />
                    <input type="text" placeholder='size' name="productSize" />
                    <input type="number" placeholder='price' name="productPrice" />
                    <input id="files" type="file" placeholder='image' name="productImage" onChange={encodeImageFileAsURL} />
                    <input id="submit" type="submit" />            
                </form>
                <div id="stats">
                    <h4>Statistics</h4>
                    <div id="red"><p><b>All</b></p></div>
                    <div id="blue"><p><b>Abstract</b></p></div>
                    <div id="yellow"><p><b>Nature</b></p></div>
                </div>
                {products.map(product =>
                    <ul key={product.id} className="productList">
                        <li key={product.list} id={product.list} onChange={handleRemove}>
                            <p>{product.title}</p>
                            <p>{product.type}</p>
                            <p>{product.category}</p>
                            <p>{product.desc}</p>
                            <p><b>Price:{product.price}$</b></p>
                            <img alt={product.title} src={product.img} />
                            <button className="ui red button" onClick={()=>handleRemove(product.id)}>Remove</button>
                        </li>
                    </ul>)}
            </div>
        )
}

const mapStateToProps = state => ({
    products: state.products.products
})
const mapDispatchToProps = dispatch => ({
    onSubmit: payload => dispatch(addProduct(payload)),
    handleRemove: id => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);