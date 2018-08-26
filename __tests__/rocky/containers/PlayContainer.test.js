import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayContainer from '../../../src/rocky/play/containers/PlayContainer'

Enzyme.configure({ adapter: new Adapter() });
var wrapper;

// test('Render matches snapshot', () => {
//     wrapper = Enzyme.shallow(<PlayContainer />);
//   expect(wrapper).toMatchSnapshot();
// })
test('resetState', () => {
  const props = {};
  const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
  let action = wrapper.instance().resetState();
  expect (action).toEqual(true);
  
  })

  test('generateComputerChoice', () => {
    const props = {};
    const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
    let action = wrapper.instance().generateComputerChoice();
    expect (action).toEqual(true);
    
    })  
    test('jokenPo', () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      let action = wrapper.instance().jokenPo();
      expect (action).toEqual(true);
      
      })  