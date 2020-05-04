import React, { useState, useEffect } from 'react';

const ReviewEntry = (props) => {
  const { review } = props;

  return (
    <div id="ReviewContent">
      <div className="leftcol">
        <div class="avatar">
          <a href={review.user.icon}></a>
        </div>
        <div className="username">
          {review.user.username}
        </div>
        <div className="num_owned_games">
          {review.user.numProducts} products in account
        </div>
        <div className="num_reviews">
          {review.user.numReviews} reviews
        </div>
      </div>
      <div className="rightcol">
        <div className="content">
          {review.description}
        </div>
        <div className="posted">
          {review.date_posted}
        </div>
        <div className="control_block">
          <button className="voteUp"></button>
          <button className="voteDown"></button>
          <button className="voteFunny"></button>
        </div>
        <div className="vote_info">
          {review.helpful} people found this review helpful
          {review.funny} people found this review funny
          {review.thread_length} additional comments
        </div>
      </div>
    </div>
  );
};

export default ReviewEntry;
