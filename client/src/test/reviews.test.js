import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../components/Reviews';
import ReviewList from '../components/ReviewList';
import ReviewEntry from '../components/ReviewEntry';
import ReviewProfile from '../components/ReviewProfile';


configure({ adapter: new Adapter() });

describe('Reviews', () => {
  test('should render correctly in "debug" mode', () => {
    const component = shallow(<Reviews debug />);
  });
});