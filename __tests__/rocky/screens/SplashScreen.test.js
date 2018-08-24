import React from 'react';
import SplashScreen from '../../../src/shared/SplashScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});