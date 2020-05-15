import styled from 'styled-components';

export const FilterBar = styled.div`
  position: absolute;
`;

export const FilterMenu = styled.div`
  font-size: 12px;
  padding: 10px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  padding: 0px;
  position: absolute;
`;

export const ReviewType = styled.div`
  border-left: 1px solid #2a475e;
  position: relative;
  float: left;
  padding-right: 10px;
  box-shadow: 0 0 5px #000;
`;

export const ReviewTypeTitle = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  color: #4582a5;
  padding: 10px;
  padding-right: 20px;
  cursor: pointer;
`;

export const ReviewTypeMenu = styled.div`
  position: absolute;
  display: none;
  padding: 10px;
  color: #556772;
  line-height: 20px;
  z-index: 10;

  &:hover {
    display: block;
	  background-color: #c6d4df;
  }
`;

export const ReviewTypeContent = styled.div`
  position: relative;
  white-space: nowrap;
`;

export const Input = styled.input`
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-rtl-ordering: logical;
  font: 400 13.3333px Arial;
  background-color: initial;
  cursor: default;
  -webkit-appearance: radio;
  box-sizing: border-box;
  border: initial;
  vertical-align: text-top;
`;

export const Label = styled.label`
  cursor: default;
`;
