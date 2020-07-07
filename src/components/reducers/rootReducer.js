import { combineReducers } from 'redux'
import shopReducer from './shopReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({  shopReducer,  reviewReducer });

export default rootReducer;


