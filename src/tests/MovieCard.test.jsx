import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import MovieCard from "@/components/MovieCard";

jest.mock("next/image", () => (props) => {
  return <img {...props} />;
});

jest.mock("next/link", () => {
  return ({ children }) => children;
});

const movie = {
  id: 1,
  title: "Avengers",
  poster_path: "/poster.jpg",
  overview: "Marvel Movie",
};

describe("MovieCard", () => {
  test("renders movie title", () => {
    render(
      <Provider store={store}>
        <MovieCard movie={movie} />
      </Provider>
    );

    expect(screen.getByText("Avengers")).toBeInTheDocument();
  });

  test("renders overview", () => {
    render(
      <Provider store={store}>
        <MovieCard movie={movie} />
      </Provider>
    );

    expect(screen.getByText("Marvel Movie")).toBeInTheDocument();
  });

  test("favorite button exists", () => {
    render(
      <Provider store={store}>
        <MovieCard movie={movie} />
      </Provider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});