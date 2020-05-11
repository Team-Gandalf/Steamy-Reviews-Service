/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => {
  const { allReviews, handleVote } = props;

  return (
    <div className="review_box">
      {allReviews.map((review) => {
        return <ReviewEntry review={review} key={review.user.id} updateVote={handleVote} />;
      })}
    </div>
  );
};


export default ReviewList;
