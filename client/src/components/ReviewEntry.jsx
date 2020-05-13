/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React, { useState } from 'react';
import ReviewProfile from './ReviewProfile.jsx';

const ReviewEntry = (props) => {
  const [view, setView] = useState('partial');
  const [helpful, setHelpful] = useState(false);
  const [funny, setFunny] = useState(false);
  const { review, updateVote } = props;

  const date = new Date(review.date_posted);
  const options = { month: 'long', day: 'numeric' };
  const postedDate = date.toLocaleString('en-US', options);

  const handleView = () => {
    setView('expanded');
  };

  const handleVote = (e) => {
    let value = review.helpful;
    if (e.target.id === 'voteFunny' && funny === false) {
      value = review.funny;
      setFunny(true);
      updateVote(e.target.id, value, review.user.id);
    }

    if (e.target.id === 'voteUp' && helpful === false) {
      setHelpful(true);
      updateVote(e.target.id, value, review.user.id);
    }

    if (e.target.id === 'voteDown' && helpful === true) {
      setHelpful(false);
      updateVote(e.target.id, value, review.user.id);
    }

  };

  return (
    <div id="ReviewContent" className={view}>
      <ReviewProfile user={review.user} key={review.user.id} />
      <div className="rightcol">
        <div className="vote_header tooltip">
          <span className="tooltiptext">See Full Review</span>
          {review.user.recommended ? (
            <div className="thumb positive">
              <img
                src="./img/thumbsup.png"
                width="40"
                height="40"
                alt="thumbup"
              />
            </div>
          )
            : (
              <div className="thumb negative">
                <img
                  src="./img/thumbsdown.png"
                  width="40"
                  height="40"
                  alt="thumbdown"
                />
              </div>
            )}
          <img
            className="review_source"
            src="./img/steamicon.png"
            alt="steamy"
          />
          <div className="title ellipsis">{review.user.recommended ? 'Recommended' : 'Not Recommended'}</div>
          <div className="hours ellipsis">
            {`${review.hours} gametime hours on record`}
          </div>
        </div>
        <div className="postedDate">
          {`Posted: ${postedDate}`}
        </div>
        <div className="content">
          {review.description}
          <div className="gradient" />
        </div>
        <div className="posted">
          <div className="view_more">
            <a onClick={handleView}>Read More</a>
          </div>
          <div className="line" />
        </div>
        <div className="control_block">
          Was this review helpful?
          <br />
          <button
            type="button"
            className="votecontrol voteUp"
            onClick={handleVote}
          >
            <span id="voteUp">Yes</span>
          </button>
          <button
            type="button"
            className="votecontrol voteDown"
            onClick={handleVote}
          >
            <span id="voteDown">No</span>
          </button>
          <button
            type="button"
            className="votecontrol voteFunny"
            onClick={handleVote}
          >
            <span id="voteFunny">Funny</span>
          </button>
        </div>
        <div className="vote_info tooltip">
          <span className="tooltiptext">See Full Review</span>
          {`${review.helpful} people found this review helpful`}
          <br />
          {`${review.funny} people found this review funny`}
          <br />
          {`${review.thread_length} additional comments`}
          <br />
        </div>
      </div>
      <div style={{ clear: 'left' }} />
    </div>
  );
};

export default ReviewEntry;
