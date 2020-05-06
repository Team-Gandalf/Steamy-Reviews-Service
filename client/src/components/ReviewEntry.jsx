import React, { useState, useEffect } from 'react';
import ReviewProfile from './ReviewProfile.jsx';

const ReviewEntry = (props) => {
  const { review } = props;

  let date = new Date(review.date_posted);
  let options = { month: 'long', day: 'numeric' };
  let postedDate = date.toLocaleString('en-US', options);

  return (
    <div id="ReviewContent">
      <ReviewProfile user={review.user} />
      <div className="rightcol">
        <div className="vote_header">
          <div className="thumb">
            <img src="./img/thumbsup.png" width="40" height="40" ></img>
          </div>
          <img className="review_source" src="./img/steamicon.png"></img>
          <div className="title ellipsis">Recommended</div>
          <div className="hours ellipsis">
            {`${review.hours} gametime hours on record`}
          </div>
        </div>
        <div className="postedDate">
          {`Posted: ${postedDate}`}
        </div>
        <div className="content">
          {review.description}
        </div>
        <div className="control_block">
          Was this review helpful?
          <br></br>
          <button type="button" className="votecontrol voteUp">
            <span>Yes</span>
          </button>
          <button type="button" className="votecontrol voteDown">
            <span>No</span>
          </button>
          <button type="button" className="votecontrol voteFunny">
            <span>Funny</span>
          </button>
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
