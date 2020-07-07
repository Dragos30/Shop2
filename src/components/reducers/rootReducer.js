import { combineReducers } from 'redux'
import shopReducer from './shopReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({ products: shopReducer, reviews: reviewReducer });

export default rootReducer;


