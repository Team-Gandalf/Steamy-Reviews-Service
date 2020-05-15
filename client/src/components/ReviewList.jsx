/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

import { ReviewBox } from './styles/styles.jsx';

const ReviewList = (props) => {
  const { allReviews, handleVote } = props;

  return (
    <ReviewBox>
      {allReviews.map((review) => {
        return <ReviewEntry review={review} key={review.user.id} updateVote={handleVote} />;
      })}
    </ReviewBox>
  );
};

export default ReviewList;
