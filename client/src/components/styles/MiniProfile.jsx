import styled from 'styled-components';

export const MiniProfile = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1200;
`;

export const ShadowContent = styled.div`
  margin: 11px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  width: 200px;
  font-weight: normal;
`;

export const MiniBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -3;
  background: radial-gradient( ellipse farthest-corner at 20% 30%, rgb( 76, 80, 91 ) 0%, rgb( 52, 55, 63 ) 50%, rgb( 40, 44, 50 ) 100% );
`;

export const BackgroundBlur = styled.div`
  width: 380px;
  height: 380px;
  filter: blur( 10px ) saturate( 2 );
  position: absolute;
  left: -60px;
  top: -60px;
  opacity: 0.4;
  -webkit-mask: radial-gradient( ellipse farthest-corner at 150px 150px, rgba( 0, 0, 0, 1 ) 0%, rgba( 0, 0, 0, 0.6 ) 20%, rgba( 0, 0, 0, 0.3 ) 34%, rgba( 0, 0, 0, 0 ) 64% );
  mask: radial-gradient( ellipse farthest-corner at 150px 150px, rgba( 0, 0, 0, 1 ) 0%, rgba( 0, 0, 0, 0.6 ) 20%, rgba( 0, 0, 0, 0.3 ) 34%, rgba( 0, 0, 0, 0 ) 64% );
  mix-blend-mode: screen;
`;

export const PlayerSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 1;
  height: 30px;
  padding: 16px;
`;

export const MiniAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;

export const MiniAvatarImg = styled.img`
  width: 32px;
  height: 32px;
  padding: 1px;
  border-radius: 0;
  border: none;
`;

export const MiniPlayerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  text-shadow: 1px 1px 4px #000;
`;

export const Persona = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 195px;
  font-size: 14px;
`;

export const MiniProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 8px 16px;
`;

export const PlayerDescription = styled.div`
  margin-left: 12px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 14px;
  white-space: nowrap;
`;

export const PlayerType = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b1b1b1;
`;

export const PlayerXP = styled.div`
  font-size: 12px;
  color: #6b6a6a;
`;

export const FriendLevel = styled.div`
  margin-top: 0;
  border-color: #d95b43;
  display: inline-block;
  font-size: 16px;
  border-radius: 16px;
  border: solid white 2px;
  height: 28px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  cursor: default;
`;

export const FriendPlayerLevel = styled.div`
  color: #e5e5e5;
`;
