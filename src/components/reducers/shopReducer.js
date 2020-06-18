import products from '../data/products';
import { ADD_TO_SHOP, REMOVE_PRODUCT } from '../actions/shop-actions';

const shopReducer = ( state = products, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_SHOP) {
        let addedProducts = state.products.find(product => product.id === action.id)
        //check if the action id exists in the addedProducts
        let existed_product = state.addedProducts.find(product => action.id === product.id)
        if (existed_product) {
            products.price = addedProducts.price
            return {
                ...state,   
            }
        }
        else {
            products.price = addedProducts.price
            //calculating the total
            let newTotal = state.total + addedProducts.price

            return {
                ...state,
                addedProducts: [...state.addedProducts],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_PRODUCT) {
        let ProductToRemove = state.addedProducts.find(product => action.id === product.id)
        let new_items = state.addedProducts.filter(product => action.id !== product.id)

        //calculating the total
        let newTotal = state.total - (ProductToRemove.price)
        console.log(ProductToRemove)
        return {
            ...state,
            addedProducts: new_items,
            total: newTotal
        }
    }
  
        return state;

}
export default shopReducer;
