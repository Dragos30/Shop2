import React from 'react';

function ReviewItem({data}) {
    return (
        <div className="review">
            {data.replies.map(reply =>
                <div key={reply.message} className="reply">
                    <div className="reply-message">
                        {reply.message}
                    </div>
                </div>
            )}
       </div>
   )
}


export default ReviewItem;