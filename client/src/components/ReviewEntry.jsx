import React from 'react';
import ReviewProfile from './ReviewProfile.jsx';

const ReviewEntry = (props) => {
  const { review, updateVote } = props;

  let date = new Date(review.date_posted);
  let options = { month: 'long', day: 'numeric' };
  let postedDate = date.toLocaleString('en-US', options);

  const handleContent = (e) => {
    const element = document.getElementById('ReviewContent');
    element.classList.remove('partial');
    element.classList.add('expanded');
  };

  const handleVote = (e) => {
    let value = review.helpful;
    if (e.target.id === 'voteFunny') {
      value = review.funny;
    }
    updateVote(e.target.id, value, review.user.id);
  };

  return (
    <div id="ReviewContent"  className="partial">
      <ReviewProfile user={review.user} key={review.user.id} />
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
          <div className="gradient" />
        </div>
        <div className="posted">
          <div className="view_more">
            <a onClick={handleContent} >Read More</a>
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
        <div className="vote_info">
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
