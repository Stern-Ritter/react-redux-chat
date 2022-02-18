import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppHeader from "./app-header";

describe("App header", () => {
  it("render component", () => {
    render(<AppHeader />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
