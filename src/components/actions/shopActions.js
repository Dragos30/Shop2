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

export const addProduct = payload => {
    return {
        type: ADD_PRODUCT,
        payload
    }
}
export const removeItem = payload => {
    return {
        type: REMOVE_ITEM,
        payload     
    }
}