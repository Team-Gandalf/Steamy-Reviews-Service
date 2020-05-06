import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../components/Reviews.jsx';
import ReviewList from '../components/ReviewList.jsx';
import ReviewEntry from '../components/ReviewEntry.jsx';
import ReviewProfile from '../components/ReviewProfile.jsx';


configure({ adapter: new Adapter() });

describe('Reviews', () => {
  test('should render correctly in "debug" mode', () => {
    const component = shallow(<Reviews debug />);

    expect(component).toMatchSnapshot();
  });
});