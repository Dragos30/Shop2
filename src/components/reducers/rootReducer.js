import { combineReducers } from 'redux'
import shopReducer from './shopReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({ shop: shopReducer, review: reviewReducer });

export default rootReducer;
