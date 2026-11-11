import { fetchFromTMDB } from "../services/tmdb.services.js";

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    );

    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    return res.json({ success: true, content: randomMovie });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getMovieGenres(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/genre/movie/list?language=en"
    );

    return res.status(200).json({ success: true, genres: data.genres });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getMovieTrailers(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );

    return res.json({ success: true, trailers: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getMovieDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    return res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getSimilarMovies(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );

    return res.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getMoviesByCategory(req, res) {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );

    return res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}
