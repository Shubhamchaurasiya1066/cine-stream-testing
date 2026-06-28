import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import Navbar from "@/components/Navbar";

// Mock next/link
jest.mock("next/link", () => {
  return ({ children, href }) => (
    <a href={href}>{children}</a>
  );
});

describe("Navbar Component", () => {
  test("renders logo", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText("CineStream")).toBeInTheDocument();
  });

  test("renders Home link", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("renders Movies link", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText("Movies")).toBeInTheDocument();
  });

  test("renders Trending link", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText("Trending")).toBeInTheDocument();
  });

  test("renders theme button", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });

  test("theme button is clickable", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(button).toBeInTheDocument();
  });

  test("renders favorites counter", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(screen.getByText(/❤️/)).toBeInTheDocument();
  });
});