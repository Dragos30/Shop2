import { ADD_REVIEW } from '../actions/review-actions';
 
const reviewReducer = (state = review, action) => {
    if (action.type === ADD_REVIEW)
        return {
            ...state,
            reviews: [...state.review, action.payload]
        }
    return state;
}

export default reviewReducer;