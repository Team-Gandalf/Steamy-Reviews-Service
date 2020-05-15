/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React, { useState } from 'react';

import ReviewsMiniProfile from './ReviewsMiniProfile.jsx';

import {
  Profile,
  Avatar,
  AvatarImg,
  Username,
  NumOwnedGames,
  NumReviews,
} from './styles/ReviewProfile.jsx';

const ReviewProfile = (props) => {
  const [display, setDisplay] = useState({ display: 'none' });
  const { user } = props;

  const handleEnter = () => {
    setDisplay({ display: 'block' });
  };

  const handleLeave = () => {
    setDisplay({ display: 'none' });
  };

  return (
    <Profile>
      <Avatar>
        <AvatarImg
          src={user.icon}
          alt={user.username}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
      </Avatar>
      <Username>
        {user.username}
      </Username>
      <NumOwnedGames>
        {`${user.numProducts} products in account`}
      </NumOwnedGames>
      <NumReviews>
        {`${user.numReviews} reviews`}
      </NumReviews>
      <ReviewsMiniProfile
        user={user}
        display={display}
      />
    </Profile>
  );
};

export default ReviewProfile;
