import React, { useState, useEffect } from 'react';

const ReviewEntry = (props) => {
  const { review } = props;

  return (
    <div id="ReviewContent">
      <div className="leftcol">
        <div class="avatar">
          <img src={review.user.icon}></img>
        </div>
        <div className="username">
          {review.user.username}
        </div>
        <div className="num_owned_games">
          {`${review.user.numProducts} products in account`}
        </div>
        <div className="num_reviews">
          {`${review.user.numReviews} reviews`}
        </div>
      </div>
      <div className="rightcol">
        <div className="vote_header">
          <div className="thumb">Thumb</div>
          <div className="title ellipsis">Recommended</div>
          <div className="hours ellipsis">
            {`${review.hours} on record`}
          </div>
        </div>
        <div className="content">
          {review.description}
        </div>
        <div className="postedDate">
          {`Posted: ${review.date_posted}`}
        </div>
        <div className="control_block">
          <button className="voteUp">Yes</button>
          <button className="voteDown">No</button>
          <button className="voteFunny">Funny</button>
        </div>
        <div className="vote_info">
          {`${review.helpful} people found this review helpful`}
          <br></br>
          {`${review.funny} people found this review funny`}
          <br></br>
          {`${review.thread_length} additional comments`}
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ReviewEntry;
