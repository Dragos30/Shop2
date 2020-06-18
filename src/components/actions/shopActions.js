import { ADD_TO_SHOP, REMOVE_PRODUCT} from './shop-actions';

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

