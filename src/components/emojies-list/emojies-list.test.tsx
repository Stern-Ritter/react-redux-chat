import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import EmojiesList from "./emojies-list";

const styles = "simple";
const clickHandler = jest.fn();

describe("Emojies list", () => {
  it("render component", () => {
    render(<EmojiesList styles={styles} clickHandler={clickHandler} />);
    expect(screen.getByTestId("emojies-list")).toBeInTheDocument();
  });

  it("render component with correct class name", () => {
    render(<EmojiesList styles={styles} clickHandler={clickHandler} />);
    expect(
      screen.getByTestId("emojies-list").classList.contains(styles)
    ).toBeTruthy();
  });

  it("render component with click handler", async () => {
    render(<EmojiesList styles={styles} clickHandler={clickHandler} />);
    await userEvent.type(screen.getByTestId("emojies-list"), "JavaScript");
    expect(clickHandler).toBeCalledTimes(1);
  });
});
