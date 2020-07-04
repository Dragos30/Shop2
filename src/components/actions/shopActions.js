import { ADD_TO_SHOP, REMOVE_PRODUCT, ADD_PRODUCT, REMOVE_ITEM } from './shop-actions';

export const addToShop= (id)=>{
    return{
        type: ADD_TO_SHOP,
        id
    }
}

export const removeProduct=(id)=>{
    return{
        type: REMOVE_PRODUCT,
        id
    }
}

export const addProduct = id => {
    return {
        type: ADD_PRODUCT,
        id
    }
}
export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id    
    }
}