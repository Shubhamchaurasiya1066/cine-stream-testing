const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

// POPULAR MOVIES
//console.log("TMDB KEY:", API_KEY);
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    return await response.json();
  } catch (error) {
    //console.log("POPULAR MOVIES ERROR:", error);

    return { results: [] };
  }
};

// MOVIE DETAILS
export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Movie details fetch failed");
    }

    return await response.json();
  } catch (error) {
    //console.log("TMDB DETAILS ERROR:", error);

    return null;
  }
};