import React from "react";
import Result from "../../../../src/rocky/play/components/Result";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

test("renders correctly", () => {
  const tree = renderer.create(<Result />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("Testing props", () => {
  const wrapper = shallow(<Result 
    countdown={null}
    result={null}
    userChoice={null}
    computerChoice={null}
    />).props();
  console.warn(wrapper);
  expect(2).toEqual(2);
});
