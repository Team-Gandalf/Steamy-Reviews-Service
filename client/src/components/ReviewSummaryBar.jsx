/* eslint-disable react/prop-types */

import React from 'react';

const ReviewSummaryBar = (props) => {
  const { allReviews } = props;

  return (
    <div className="user_reviews_summary_bar">
      <div className="summary">
        <div className="title">Overall Reviews:</div>
        <span className="game_review_summary">Overwhelmingly Positive</span>
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
