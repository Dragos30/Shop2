import { ADD_REVIEW } from './review-actions';

export const addReview = review => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}