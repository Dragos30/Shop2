import React from 'react';

function ReviewForm({ handleOnSubmit} ) {
    const handleSubmit = event => {
        const { reviewText, reviewAuthor}  = event.target;
        
        handleOnSubmit({
            author: reviewAuthor.value,
            text: reviewText.value
        });

        event.preventDefault();
    }

    return (
        <div className="reviewForm">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder='name' name="reviewAuthor" />
                <input type="text" palceholder='text' name="reviewText" />
                <input id="submit" type="submit"/>
            </form>
        </div>
    )
}   

export default ReviewForm;