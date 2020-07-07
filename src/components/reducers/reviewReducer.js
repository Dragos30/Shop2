const initialState = {
    reviews: []
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_REVIEW":
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            };
        default:
            return state;
    }

}

export default reviewReducer;