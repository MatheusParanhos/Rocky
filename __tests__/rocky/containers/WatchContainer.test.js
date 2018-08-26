import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WatchContainer from '../../../src/rocky/watch/containers/WatchContainer'

Enzyme.configure({ adapter: new Adapter() });
var wrapper;

// test('Render matches snapshot', () => {
//     wrapper = Enzyme.shallow(<WatchContainer />);
//   expect(wrapper).toMatchSnapshot();
// })
test('resetState', () => {
  const props = {};
  const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
  let action = wrapper.instance().resetState();
  expect (action).toEqual(true);
  
  })

  test('generateChoice', () => {
    const props = {};
    const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
    let action = wrapper.instance().generateChoice();
    expect (action).toEqual(true);
    
    })  
    test('jokenPo', () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      let action = wrapper.instance().jokenPo();
      expect (action).toEqual(true);
      
      })  