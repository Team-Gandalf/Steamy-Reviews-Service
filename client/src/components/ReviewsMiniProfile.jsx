import React from 'react';

const ReviewsMiniProfile = (props) => {
  const { user, display } = props;

  return (
    <div className="miniprofile_hover" style={display}>
      <div className="miniprofile_hover shadow_content">
        <div className="miniprofile_hover container">
          <div className="miniprofile_hover background">
            <div className="miniprofile_hover backgroundblur" />
          </div>
          <div className="miniprofile_hover playersection">
            <div className="playersection_avatar">
              <img src={user.icon} alt={user.username} />
            </div>
            <div className="player_content">
              <span className="persona">{user.username}</span>
            </div>
          </div>
          <div className="miniprofile_hover details">
            <div className="miniprofile_hover playerdescription">
              <div className="type">Power Player</div>
              <div className="xp">336 XP</div>
              <div className="friendPlayerLevel">
                <span className="friendPlayerLevelNum">21</span>
              </div>
              <div className="type">Steam Level: 300</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsMiniProfile;
