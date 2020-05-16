import styled from 'styled-components';

export const SummaryBar = styled.div`
  border-bottom: 1px solid #000000;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #2a475e;
  box-shadow: 0 0 5px black;
  position: inline-block;
  min-height: 38px;
  width: 600px;
`;

export const Summary = styled.div`
  display: inline-block;
  margin-right: 15px;
  color: #8ba6b6;
  min-width: 320px;
`;

export const SummaryTitle = styled.div`
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 5px;
  color: #e5e5e5;
`;

export const SummaryRating = styled.span`
  cursor: help;
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
  color: #66C0F4;
`;

export const NumReviews = styled.span`
  color: #8ba6b6;
`;
