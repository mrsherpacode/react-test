// renders React components for testing
// screen — queries the rendered component to find elements
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Greet from "../../src/components/Greet";
// Adds extra matchers like toBeInTheDocument() and toHaveTextContent().
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render hello with the name when the name is provided ", () => {
    render(<Greet name="sherpa" />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/hello sherpa/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render button when the name is not provided ", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/login/i);
  });
});
