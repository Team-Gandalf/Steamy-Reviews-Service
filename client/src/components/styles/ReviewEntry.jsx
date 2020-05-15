import styled from 'styled-components';

export const ReviewContent = styled.div`
  padding: 8px 8px 8px 16px;
  float: left;
  width: 400px;
  position: relative;
  width: 308px;
  margin-left: 14px;
  float: right;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  right: 10px;
  position: absolute;
	padding: 0px 10px;
	box-shadow: 0 0 5px #000;
	background: -webkit-linear-gradient( top, #e3eaef 5%, #c7d5e0 95%);
	background: linear-gradient( to bottom, #e3eaef 5%, #c7d5e0 95%);
  z-index: 1;
  color:black;
  border-radius: 6px;
  text-align: center;
`;

export const VoteHeader = styled.div`
  margin: 8px 0 13px;
  display: block;
  background: rgba( 0, 0, 0, 0.2 );
  height: 40px;

  & ${TooltipText}:hover {
    visibility: visible;
    left: 50%;
    cursor: pointer;
  }

  &:hover {
    background: rgba( 255, 255, 255, 0.1 );
  }
`;

export const Thumb = styled.div`
  float: left;
  margin-right: 10px;
`;

export const ReviewSource = styled.div`
  float: right;
  margin-right: 5px;
  margin-top: 12px;
  opacity: 0.5;
`;

export const VoteHeaderTitle = styled.div`
  font-size: 16px;
  color: #d6d7d8;
  font-weight: normal;
  padding: 3px 0px 0px 0px;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HoursPlayed = styled.div`
  font-weight: 300;
  font-size: 11px;
  line-height: 15px;
  color: #8091a2;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DatePosted = styled.div`
  margin: 0px 0px 8px;
  font-size: 10px;
  text-transform: uppercase;
  font-style: normal;
  color: #8091a2;
  display: inline-block;
  opacity: 0.6;
`;
