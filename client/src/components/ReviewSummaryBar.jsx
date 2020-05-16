/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

import {
  SummaryBar,
  Summary,
  SummaryTitle,
  SummaryRating,
  NumReviews,
} from './styles/SummaryBar.jsx';

const ReviewSummaryBar = (props) => {
  const { allReviews } = props;

  let steamRating = 'Overwhelmingly Negative';

  if (allReviews[0]) {
    const percent = (allReviews[0].rating / allReviews[0].game_reviews);

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
    <SummaryBar>
      <Summary>
        <SummaryTitle>Overall Reviews:</SummaryTitle>
        <SummaryRating>{steamRating}</SummaryRating>
        {allReviews.length
          && (
          <NumReviews>
            {`(${allReviews[0].game_reviews} reviews)`}
          </NumReviews>
          )}
      </Summary>
    </SummaryBar>
  );
};

export default ReviewSummaryBar;
