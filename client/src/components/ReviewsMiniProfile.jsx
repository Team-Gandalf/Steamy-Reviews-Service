/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

import {
  MiniProfile,
  ShadowContent,
  Container,
  MiniBackground,
  BackgroundBlur,
  PlayerSection,
  MiniAvatar,
  MiniAvatarImg,
  MiniPlayerContent,
  Persona,
  MiniProfileDetails,
  PlayerDescription,
  PlayerType,
  PlayerXP,
  FriendLevel,
  FriendPlayerLevel,
} from './styles/MiniProfile.jsx';

const ReviewsMiniProfile = (props) => {
  const { user, display } = props;

  return (
    <MiniProfile style={display}>
      <ShadowContent>
        <Container>
          <MiniBackground>
            <BackgroundBlur />
          </MiniBackground>
          <PlayerSection>
            <MiniAvatar>
              <MiniAvatarImg src={user.icon} alt={user.username} />
            </MiniAvatar>
            <MiniPlayerContent>
              <Persona>{user.username}</Persona>
            </MiniPlayerContent>
          </PlayerSection>
          <MiniProfileDetails>
            <PlayerDescription>
              <PlayerType>{user.player_type}</PlayerType>
              <PlayerXP>{`${user.xp} XP`}</PlayerXP>
              <FriendLevel>
                <FriendPlayerLevel>{user.friend_level}</FriendPlayerLevel>
              </FriendLevel>
              <PlayerType>{`Steam Level: ${user.steam_level}`}</PlayerType>
            </PlayerDescription>
          </MiniProfileDetails>
        </Container>
      </ShadowContent>
    </MiniProfile>
  );
};

export default ReviewsMiniProfile;
