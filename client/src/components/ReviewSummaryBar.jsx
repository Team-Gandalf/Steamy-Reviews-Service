/* eslint-disable react/prop-types */

import React from 'react';

const ReviewSummaryBar = (props) => {
  const { allReviews } = props;

  let steamRating = 'Overwhelmingly Negative';

  if (allReviews[0]) {
    const percent = (allReviews[0].ratings / allReviews[0].game_reviews);

    if (percent > 0.9) {
      steamRating = 'Overwhelmingly Positive';
    } else if (percent > 0.8) {
      steamRating = 'Very Positive';
    } else if (percent > 0.7) {
      steamRating = 'Mostly Positive';
    } else if (percent > 0.6) {
      steamRating = 'Mixed';
    } else if (percent > 0.5) {
      steamRating = 'Very Negative';
    } else if (percent > 0.4) {
      steamRating = 'Mostly Negative';
    }
  }


  return (
    <div className="user_reviews_summary_bar">
      <div className="summary">
        <div className="title">Overall Reviews:</div>
        <span className="game_review_summary">{steamRating}</span>
        {allReviews.length
          && (
          <span>
            {`(${allReviews[0].game_reviews} reviews)`}
          </span>
          )}
      </div>
    </div>
  );
};

export default ReviewSummaryBar;
