import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as redux from "react-redux";
import userEvent from "@testing-library/user-event";
import * as actions from "../../services/actions/chat-form";
import ChatForm from "./chat-form";

const useSelectorSpy = jest.spyOn(redux, "useSelector");
const useDispatchSpy = jest.spyOn(redux, "useDispatch");
const mockDispatchFn = jest.fn();

const setSendMessageFromValueSpy = jest.spyOn(
  actions,
  "setSendMessageFromValue"
);
const sendMessageSpy = jest.spyOn(actions, "sendMessage");

describe("Chat form", () => {
  beforeAll(() => {
    useSelectorSpy.mockReturnValue({});
    useDispatchSpy.mockReturnValue(mockDispatchFn);
  });

  it("render component", () => {
    render(<ChatForm />);
    expect(screen.getByTestId("chat-form")).toBeInTheDocument();
  });

  it("render component with correct content", () => {
    render(<ChatForm />);
    expect(screen.getByLabelText("Имя:")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Введите ваше сообщение:")
    ).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  // onEnter';
  // 'onFormChange';
  // 'onFormSubmit';
  it("render component with correct event handlers", async () => {
    render(<ChatForm />);

    userEvent.dblClick(screen.getByLabelText("Введите ваше сообщение:"));
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actions.MESSAGES_SEND_FORM_TEXT_INPUT_ENTER,
    });

    userEvent.keyboard("foo");
    expect(mockDispatchFn).toHaveBeenCalledTimes(4);
    expect(setSendMessageFromValueSpy).toHaveBeenCalledWith({
      field: "message",
      value: "foo",
    });

    userEvent.dblClick(screen.getByLabelText("Имя:"));
    userEvent.keyboard("amp");
    expect(mockDispatchFn).toHaveBeenCalledTimes(7);
    expect(setSendMessageFromValueSpy).toHaveBeenCalledWith({
      field: "name",
      value: "amp",
    });

    userEvent.click(screen.getByRole("button"));
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);
  });
});
