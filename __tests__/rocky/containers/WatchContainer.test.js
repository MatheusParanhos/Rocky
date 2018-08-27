import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WatchContainer from "../../../src/rocky/watch/containers/WatchContainer";
import WatchResult from "../../../src/rocky/watch/components/WatchResult";

Enzyme.configure({ adapter: new Adapter() });
var wrapper;

// test('Render matches snapshot', () => {
//     wrapper = Enzyme.shallow(<WatchContainer />);
//   expect(wrapper).toMatchSnapshot();
// })
test("resetState", () => {
  const props = {};
  const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
  let action = wrapper.instance().resetState();
  expect(action).toEqual(true);
});

test("generateChoice", () => {
  const props = {};
  const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
  let action = wrapper.instance().generateChoice();
  expect(action).toEqual(true);
});

jest.useFakeTimers();
describe("WatchContainer Components", () => {
  describe("jokenPo function", () => {
    test("rock won's over scissors", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("rock", "scissors");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual("Jack won!!");
    });
    test("rock draws with rock", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("rock", "rock");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual(
        "Fair enough, it's a draw!"
      );
    });
    test("scissors won over paper", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("scissors", "paper");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual("Jack won!!");
    });
    test("scissors draws with scissors", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("scissors", "scissors");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual(
        "Fair enough, it's a draw!"
      );
    });
    test("paper wins over rock", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("paper", "rock");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual("Jack won!!");
    });
    test("paper draws with paper", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("paper", "paper");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual(
        "Fair enough, it's a draw!"
      );
    });
    test("paper loses over scissors", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("paper", "scissors");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual("Jade won!!");
    });
    test("rock loses over paper", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("rock", "paper");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual("Jade won!!");
    });
    test("scissors loses over rock", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
      wrapper.instance().jokenPo("scissors", "rock");
      expect(wrapper.find(WatchResult).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(WatchResult).props().result).toEqual("Jade won!!");
    });
  });
  jest.useFakeTimers();
  test("pressButton", () => {
    const props = {};
    const wrapper = Enzyme.shallow(<WatchContainer {...props} />);
    const beforeProps = wrapper.find(WatchResult).props();
    wrapper.instance().resetState("rock");
    const afterProps = wrapper.find(WatchResult).props();
   // console.log(beforeProps, afterProps);
    expect(afterProps.countdown).toEqual(3);
    jest.runAllTimers();
    const propsAfterTimeout = wrapper.find(WatchResult).props();
   // console.log(propsAfterTimeout);
  });
});
