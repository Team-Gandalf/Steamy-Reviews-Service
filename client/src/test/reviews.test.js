/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import React from 'react';
import Enzyme, {
  shallow,
  mount,
} from 'enzyme';
import Reviews from '../components/Reviews';
import ReviewList from '../components/ReviewList';
import ReviewEntry from '../components/ReviewEntry';
import ReviewProfile from '../components/ReviewProfile';

import exampleData from './reviews.example';

describe('Renders components successfully', () => {
  test('should render the Reviews component', () => {
    expect(shallow(<Reviews />).find('.left-col').exists()).toBe(true);
  });

  test('loads ReviewList component', () => {
    expect(shallow(<ReviewList allReviews={exampleData} />).exists()).toBe(true);
  });

  test('loads ReviewEntry component', () => {
    expect(shallow(<ReviewEntry review={exampleData[0]} />).exists()).toBe(true);
  });

});
