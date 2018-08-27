import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlayContainer from "../../../src/rocky/play/containers/PlayContainer";
import Result from "../../../src/rocky/play/components/Result";

Enzyme.configure({ adapter: new Adapter() });
var wrapper;

// test('Render matches snapshot', () => {
//     wrapper = Enzyme.shallow(<PlayContainer />);
//   expect(wrapper).toMatchSnapshot();
// })
test("resetState", () => {
  const props = {};
  const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
  let action = wrapper.instance().resetState();
  expect(action).toEqual(true);
});

test("generateComputerChoice", () => {
  const props = {};
  const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
  let action = wrapper.instance().generateComputerChoice();
  expect(action).toEqual(true);
});

jest.useFakeTimers();
describe("PlayContainer Components", () => {
  describe("jokenPo function", () => {
    test("rock won's over scissors", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("rock", "scissors");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual("Nice, you won!!");
    });
    test("rock draws with rock", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("rock", "rock");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual(
        "Fair enough, it's a draw!"
      );
    });
    test("scissors won over paper", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("scissors", "paper");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual("Nice, you won!!");
    });
    test("scissors draws with scissors", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("scissors", "scissors");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual(
        "Fair enough, it's a draw!"
      );
    });
    test("paper wins over rock", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("paper", "rock");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual("Nice, you won!!");
    });
    test("paper draws with paper", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("paper", "paper");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual(
        "Fair enough, it's a draw!"
      );
    });
    test("paper loses over scissors", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("paper", "scissors");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual("Oh no, you lost!");
    });
    test("rock loses over paper", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("rock", "paper");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual("Oh no, you lost!");
    });
    test("scissors loses over rock", () => {
      const props = {};
      const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
      wrapper.instance().jokenPo("scissors", "rock");
      expect(wrapper.find(Result).props().countdown).toEqual(3);
      jest.runAllTimers();
      expect(wrapper.find(Result).props().result).toEqual("Oh no, you lost!");
    });
  });
  jest.useFakeTimers();
  test("pressButton", () => {
    const props = {};
    const wrapper = Enzyme.shallow(<PlayContainer {...props} />);
    const beforeProps = wrapper.find(Result).props();
    wrapper.instance().resetState("rock");
    const afterProps = wrapper.find(Result).props();
   // console.log(beforeProps, afterProps);
    expect(afterProps.countdown).toEqual(3);
    jest.runAllTimers();
    const propsAfterTimeout = wrapper.find(Result).props();
   // console.log(propsAfterTimeout);
  });
});
