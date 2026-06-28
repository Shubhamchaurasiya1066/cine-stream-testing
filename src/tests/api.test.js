import { getPopularMovies, getMovieDetails } from "@/lib/tmdb";

global.fetch = jest.fn();

describe("TMDB API Tests", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetches popular movies successfully", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: [
          {
            id: 1,
            title: "Avengers",
          },
        ],
      }),
    });

    const data = await getPopularMovies();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data.results[0].title).toBe("Avengers");
  });

  test("returns empty array if popular movies fetch fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    const data = await getPopularMovies();

    expect(data.results).toEqual([]);
  });

  test("fetches movie details successfully", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 1,
        title: "Avengers",
      }),
    });

    const movie = await getMovieDetails(1);

    expect(movie.title).toBe("Avengers");
  });

  test("returns null when movie details fetch fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    const movie = await getMovieDetails(1);

    expect(movie).toBeNull();
  });
});