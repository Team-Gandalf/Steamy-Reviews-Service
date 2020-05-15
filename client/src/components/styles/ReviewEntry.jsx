import styled from 'styled-components';

export const Review = styled.div`
  border-bottom: 26px solid #1B2838;
`;

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

export const Content = styled.div`
  margin-right: 8px;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #acb2b8;
  overflow-wrap: break-word;
  overflow: hidden;

  ${({ partial }) => partial && `
    max-height: 200px;
    overflow: visible;
    position: relative;
  `}

  ${({ expanded }) => expanded && `
    display: none;
  `}
`;

export const Gradient = styled.div`
  ${({ partial }) => partial && `
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
    height: 30px;
    background: linear-gradient( to bottom, rgba( 22,32,45,0) 5%, rgba( 22,32,45,.95) 95%);
  `}

  ${({ expanded }) => expanded && `
    display: none;
  `}
`;

export const ViewMore = styled.div`
  ${({ partial }) => partial && `
    color: #67c1f5;
    text-transform: uppercase;
    font-style: normal;
    text-decoration: none;
    font-size: 10px;
    cursor: pointer;
  `}

  ${({ expanded }) => expanded && `
    display: none;
  `}
`;

export const Posted = styled.div`
  ${({ expanded }) => expanded && `
    font-size: 10px;
    font-style: italic;
    color: #626366;
    margin: 0px;
  `}
`;

export const Line = styled.div`
  background-color: #363f4c;
  height: 1px;
`;

export const ControlBlock = styled.div`
  margin: 8px 0;
  display: inline-block;
`;

export const Button = styled.button`
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: #66c0f4;
  margin: 16px;
  width: 16px;
  height: 16px;
  background: url("http://54.67.101.150:4200/img/votecontrolicons.png") no-repeat top left;
  vertical-align: text-top;
  display: table-cell;
  position: relative;

  &:hover {
    filter: saturate(4);
  }

  &:focus {
    background-color: #97d1f3;
    outline: none;
    box-shadow: none;
  }
`;

export const VoteUp = styled.span`
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  padding: 16px;
  background-position: -112px -16px;

  &:hover {
    background-position: -144px -16px;
  }
`;

export const VoteDown = styled.span`
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  padding: 16px;
  background-position: -64px -16px;

  &:hover {
    background-position: -80px -16px;
  }
`;

export const VoteFunny = styled.span`
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  padding: 16px;
  background-position: -208px -16px;

  &:hover {
    background-position: -224px -16px;
  }
`;


export const VoteInfo = styled.div`
  padding: 0px 9px 8px 0px;
  font-size: 12px;
  color: #647580;
  background-color: rgba( 0, 0, 0, 0.2 );
  min-height: 16px;

  & ${TooltipText}:hover {
    visibility: visible;
    left: 50%;
    cursor: pointer;
  }
`;

export const Break = styled.div`
  clear: left;
`;
