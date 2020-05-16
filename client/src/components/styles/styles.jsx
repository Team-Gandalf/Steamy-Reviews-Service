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
  }
`;

export const ReviewsBackground = styled.div`
  display: block;
  padding-top: 1rem;
  font-size: 12px;
`;

export const Title = styled.h2`
  background-image: url('https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png');
  background-position: left bottom;
  background-repeat: no-repeat no-repeat;
  border-width: 0;
  color: #fff;
  font-family: "Motiva Sans",sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 26px;
  margin: 0 0 10px;
  padding: 2px 0 0;
  text-transform: uppercase;
  padding-top: 47rem;
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
