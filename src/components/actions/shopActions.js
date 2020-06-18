import { ADD_TO_SHOP, REMOVE_PRODUCT} from './shop-actions';
import { VIEW_PRODUCTS } from './view-product';

export const viewProducts = (id)=> {
    return {
        type: VIEW_PRODUCTS,
        id
    }
}
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

