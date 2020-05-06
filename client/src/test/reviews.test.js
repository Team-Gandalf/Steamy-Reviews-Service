import React from 'react';
import Enzyme, {
  configure, shallow, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../components/Reviews';
import ReviewList from '../components/ReviewList';
import ReviewEntry from '../components/ReviewEntry';
import ReviewProfile from '../components/ReviewProfile';

import exampleData from './reviews.example';


configure({ adapter: new Adapter() });

describe('Renders components successfully', () => {
  test('should render the Reviews component', () => {
    expect(shallow(<Reviews />).find('.left-col').exists()).toBe(true);
  });

  test('loads get request', () => {
    const app = mount(<Reviews />);
  });

});
