/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
  it("renders main text", () => {
    render(<Index />);

    const paragraph = screen.getByText(
      /Our group is for anybody who wants to talk about/i
    );

    expect(paragraph).toBeInTheDocument();
  });
});
