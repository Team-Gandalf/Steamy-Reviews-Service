import React, { useState, useEffect } from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = (props) => {
  const { allReviews } = props;

  return (
    <div className="review_box">
      {allReviews.map((review) => {
        return <ReviewEntry review={review} />;
      })}
    </div>
  );
};


export default ReviewList;
