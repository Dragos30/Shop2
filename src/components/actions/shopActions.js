import { ADD_TO_SHOP, REMOVE_ITEM } from './shop-actions';

export const addToShop= (id)=>{
    return{
        type: ADD_TO_SHOP,
        id
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

