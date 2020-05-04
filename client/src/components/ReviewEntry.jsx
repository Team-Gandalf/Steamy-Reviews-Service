import React, { useState, useEffect } from 'react';

const ReviewEntry = (props) => {
  const { review } = props;

  return (
    <div>
      <div className="content">
        {review.description}
      </div>
      <div className="posted">
        {review.date_posted}
      </div>
      <div className="control_block">
        <button className="voteUp">
        <button className="voteDown">
        <button className="voteFunny">
      </div>
      <div className="vote_info">
        {review.helpful} people found this review helpful
        {review.funny} people found this review funny
        {review.thread_length} additional comments
      </div>
    </div>
  );
};

export default ReviewEntry;
