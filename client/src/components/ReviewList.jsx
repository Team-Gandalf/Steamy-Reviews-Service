import React, { useState, useEffect } from 'react';
import ReviewEntry from 'ReviewEntry.jsx';

const ReviewList = (props) => {
  const { allReviews } = props;

  return (
    <div>
      {allReviews.map((review) => {
        return <ReviewEntry review={review} />;
      })}
    </div>
  );
};


export default ReviewList;
