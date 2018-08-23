import React from 'react';
import PlayScreen from '../../../src/rocky/screens/PlayScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PlayScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});