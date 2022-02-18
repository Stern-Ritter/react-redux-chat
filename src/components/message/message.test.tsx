import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "./message";

const content = {
  nickname: "Roland Deschain",
  message: "Let evil wait for the day on which it must fall.",
  date: "28.12.2022",
};
const key = 1;

describe("Message", () => {
  it("render component", () => {
    render(<Message key={key} content={content} />);
    expect(screen.getByTestId("message")).toBeInTheDocument();
  });

  it("render component with correct content", () => {
    render(<Message key={key} content={content} />);
    expect(screen.getByText("Roland Deschain:")).toBeInTheDocument();
    expect(
      screen.getByText("Let evil wait for the day on which it must fall.")
    ).toBeInTheDocument();
    expect(screen.getByText("28.12.2022")).toBeInTheDocument();
  });
});
