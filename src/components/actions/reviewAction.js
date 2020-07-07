import { ADD_REVIEW } from './review-actions';

export const addReview = payload => {
    return {
        type: ADD_REVIEW,
        payload
    }
}