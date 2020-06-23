import product from '../data/products';
import { ADD_TO_SHOP, REMOVE_PRODUCT } from '../actions/shop-actions';

const shopReducer = ( state = product, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_SHOP) {
        let addedProduct = state.products.find(product => product.id === action.id)
        //check if the action id exists in the addedProducts
        let existed_product = state.addedProducts.find(product => action.id === product.id)
        if (existed_product)
        {   product.id = addedProduct.id
            product.price = addedProduct.price
            return {
                ...state, 
                action : null,
               total: state.total 
            }
        }
        else {
            product.price = addedProduct.price
            //calculating the total
            let newTotal = state.total + addedProduct.price

            return {
                ...state,
                addedProducts: [...state.addedProducts, addedProduct],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_PRODUCT) {
        let productToRemove = state.addedProducts.find(product => action.id === product.id)
        let new_items = state.addedProducts.filter(product => action.id !== product.id)

        //calculating the total
        let newTotal = state.total - (productToRemove.price)
        console.log(productToRemove)
        return {
            ...state,
            addedProducts: new_items,
            total: newTotal
        }
    }
  
        return state;

}
export default shopReducer;
