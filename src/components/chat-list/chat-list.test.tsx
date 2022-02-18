import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as redux from "react-redux";
// @ts-ignore
import * as enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ChatList from "./chat-list";

enzyme.configure({ adapter: new Adapter() });

const useSelectorSpy = jest.spyOn(redux, "useSelector");
const useDispatchSpy = jest.spyOn(redux, "useDispatch");
const mockDispatchFn = jest.fn();

const messages = [
  {
    nickname: "Roland Deschain",
    message: "Let evil wait for the day on which it must fall.",
    date: "28.12.2022",
  },
  {
    nickname: "Susannah Dean",
    message: "Roll me in sugar and call me a fuckin jelly-doughnut!",
    date: "29.12.2022",
  },
  {
    nickname: "Jake Chambers",
    message: "There will be water if God wills it.",
    date: "30.12.2022",
  },
  {
    nickname: "Eddie Dean",
    message: "Weeping, creeping Jesus!",
    date: "31.12.2022",
  },
];

describe("Chat list", () => {
  beforeAll(() => {
    useSelectorSpy.mockReturnValue(messages);
    useDispatchSpy.mockReturnValue(mockDispatchFn);
  });

  it("render component", () => {
    render(<ChatList />);
    expect(screen.getByTestId("chat-list")).toBeInTheDocument();
  });

  it("render component with correct content", () => {
    render(<ChatList />);
    expect(screen.getByText("Сообщения:")).toBeInTheDocument();
    expect(screen.getAllByTestId("message")).toHaveLength(4);
    messages
      .map((element) => ({ ...element, nickname: `${element.nickname}:` }))
      .reduce(
        (all, message) => all.concat(Object.values(message)),
        [] as string[]
      )
      .forEach((messagePart) => {
        expect(screen.getByText(messagePart)).toBeInTheDocument();
      });
  });

  it(`render component that call setInterval,
  and clearInterval when component did unmount`, () => {
    jest.useFakeTimers();
    const wrapper = enzyme.mount(<ChatList />);
    jest.runOnlyPendingTimers();
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(mockDispatchFn).toHaveBeenCalledTimes(2);
    wrapper.unmount();
    jest.runOnlyPendingTimers();
    expect(mockDispatchFn).toHaveBeenCalledTimes(2);
  });
});
