import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayContainer from '../../../src/rocky/play/containers/PlayContainer'

Enzyme.configure({ adapter: new Adapter() });
var wrapper;

test('Render matches snapshot', () => {
    wrapper = Enzyme.shallow(<PlayContainer />);
  expect(wrapper).toMatchSnapshot();
})
