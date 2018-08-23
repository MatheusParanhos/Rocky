// __tests__/Intro-test.js
import React from 'react';
import Hello from './Hello';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Hello />).toJSON();
  expect(tree).toMatchSnapshot();
});