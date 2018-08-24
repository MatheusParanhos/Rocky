import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Buttons from '../../../../src/rocky/play/components/Buttons';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Buttons component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Buttons onScissorsPress={()=>console.log('scissors')} onPaperPress={()=>console.log('paper')} onRockPress={()=>console.log('rock')} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});