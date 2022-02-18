import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Emoji from "./emoji";

const code = "\u{1F604}";

describe("Emojie", () => {
  it("render component", () => {
    render(<Emoji code={code} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("render component with correct content", () => {
    render(<Emoji code={code} />);
    expect(screen.getByText("\u{1F604}")).toBeInTheDocument();
  });
});
