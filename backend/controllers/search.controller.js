import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.services.js";

export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });

    return res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchPerson contoller: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorText: error.message,
    });
  }
}

export async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });

    return res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchMovie contoller: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorText: error.message,
    });
  }
}

export async function searchTvShow(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].name,
          searchType: "tv-show",
          createdAt: new Date(),
        },
      },
    });

    return res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchMovie contoller: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorText: error.message,
    });
  }
}

export async function getSearchHistory(req, res) {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorText: error.message,
    });
  }
}

export async function removeItemFromSearchHistory(req, res) {
  let { id } = req.params;

  id = parseInt(id);

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id: id },
      },
    });
    return res
      .status(200)
      .json({ success: true, message: "Item removed from search history" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      errorText: error.message,
    });
  }
}
