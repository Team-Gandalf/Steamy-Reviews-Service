import React, { useState } from 'react';

import ReviewsMiniProfile from './ReviewsMiniProfile.jsx';

const ReviewProfile = (props) => {
  const [display, setDisplay] = useState({ display: 'none' });
  const { user } = props;

  const handleEnter = () => {
    setDisplay({ display: 'block' });
  };

  const handleLeave = () => {
    setDisplay({ display: 'none'});
  };

  return (
    <div className="leftcol">
      <div className="avatar">
        <img
          src={user.icon}
          alt={user.username}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
      </div>
      <div className="username">
        {user.username}
      </div>
      <div className="num_owned_games">
        {`${user.numProducts} products in account`}
      </div>
      <div className="num_reviews">
        {`${user.numReviews} reviews`}
      </div>
      <ReviewsMiniProfile
        user={user}
        display={display}
      />
    </div>
  );
};

export default ReviewProfile;
