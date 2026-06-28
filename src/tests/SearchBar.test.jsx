import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import SearchBar from "@/components/SearchBar";

describe("SearchBar Component", () => {
  test("renders input field", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText("Search movies, actors, genres...")
    ).toBeInTheDocument();
  });

  test("renders search button", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(
      screen.getByRole("button", { name: /search/i })
    ).toBeInTheDocument();
  });

  test("updates input value when typing", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      "Search movies, actors, genres..."
    );

    await user.type(input, "Avengers");

    expect(input).toHaveValue("Avengers");
  });

  test("search button is clickable", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const button = screen.getByRole("button", {
      name: /search/i,
    });

    await user.click(button);

    expect(button).toBeInTheDocument();
  });
});