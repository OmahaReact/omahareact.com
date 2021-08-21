/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByText(/Site will be available soon!/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders main text", () => {
    render(<Index />);

    const paragraph = screen.getByText(
      /This is the placeholder text for the Omaha React\/Node\/NextJs Group as this site has not been built\. Check back soon!/i
    );

    expect(paragraph).toBeInTheDocument();
  });
});
