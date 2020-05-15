import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  body {
    background-color: #1B2838;
    color: #c6d4df;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 12px;
  }
`;

export const ReviewsBackground = styled.div`
  display: block;
`;

export const Title = styled.h2`
  border-top: 1px solid black;
  margin-bottom: 0px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 10px;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
`;

export const LeftCol = styled.div`
  width: 616px;
  float: left;
`;

export const MostHelpfulReviews = styled.div`
  padding-top: 5px;
  border-top: 1px solid black;
  font-weight: 300;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: 2px;
  position: relative;
`;

export const MostHelpfulDays = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: #56707f;
`;

export const ReviewBox = styled.div`
  background-color: rgba( 0, 0, 0, 0.2 );
  margin-bottom: 26px;
  min-height: 100%;
  position: absolute;
`;
