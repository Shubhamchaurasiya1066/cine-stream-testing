import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Hero from "@/components/Hero";

describe("Hero Component", () => {

  test("renders heading", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Stream Movies/i)
    ).toBeInTheDocument();
  });

  test("renders second heading line", () => {
    render(<Hero />);

    expect(
      screen.getByText(/In Ultra Experience/i)
    ).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        /Discover trending movies with server-side rendering/i
      )
    ).toBeInTheDocument();
  });

  test("renders Explore Movies button", () => {
    render(<Hero />);

    expect(
      screen.getByRole("button", {
        name: /Explore Movies/i,
      })
    ).toBeInTheDocument();
  });

  test("button is clickable", async () => {

    const user = userEvent.setup();

    render(<Hero />);

    const button = screen.getByRole("button", {
      name: /Explore Movies/i,
    });

    await user.click(button);

    expect(button).toBeInTheDocument();
  });

});