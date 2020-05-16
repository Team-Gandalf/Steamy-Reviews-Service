import styled from 'styled-components';

export const Profile = styled.div`
  float: left;
  padding: 8px;
  opacity: 0.6;
`;

export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  position: relative;
  border-radius: 0;
  padding: 1px;
  float: left;
  padding-right: 8px;
  display: block;
`;

export const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  padding: 1px;
  border-radius: 0;
  border: none;
`;

export const Username = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  margin-bottom: -1px;
  display: inline-block;
  color: #c1dbf4;
  font-size: 13px;
  font-weight: bold;
`;

export const NumOwnedGames = styled.div`
  font-size: 11px;
  color: #626366;
  display: block;
  line-height: 17px;

  &:hover {
    filter: invert(1);
  }
`;

export const NumReviews = styled.div`
  font-size: 11px;
  color: #626366;
  display: block;
  color: #c1dbf4;

  &:hover {
    filter: saturate(4);
  }
`;
