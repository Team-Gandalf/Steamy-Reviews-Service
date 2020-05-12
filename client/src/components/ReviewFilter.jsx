/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

const ReviewFilter = (props) => {
  const { review, changeView } = props;

  const handleChange = (e) => {
    console.log(e.target);
  };

  if (review === null) {
    return (
      <span className="empty"></span>
    );
  }

  return (
    <div id="reviews_filter_options">
      <div className="user_reviews_filter_menu">
        <div className="title">
          Review Type
        </div>
        <div className="user_reviews_filter_menu_flyout">
          <div className="user_reviews_filter_menu_content">
            <input type="radio" name="review_type" value="all" id="review_type_all" onChange={handleChange} />
            <label htmlFor="review_type_all">
              {`All (${review.game_reviews})`}
            </label>
            <br />
            <input type="radio" name="review_type" value="positive" id="review_type_positive" onChange={handleChange} />
            <label htmlFor="review_type_positive">
              {`Positive (${review.rating})`}
            </label>
            <br />
            <input type="radio" name="review_type" value="negative" id="review_type_negative" onChange={handleChange} />
            <label htmlFor="review_type_negative">
              {`Negative (${review.game_reviews - review.rating})`}
            </label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilter;
