import express from "express";
import {
  getTrendingTvShow,
  getTvShowTrailers,
  getTvShowDetails,
  getSimilarTvShows,
  getTvShowsByCategory,
  getTvShowGenres,
} from "../controllers/tvShow.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTvShow);
router.get("/genres", getTvShowGenres);
router.get("/:id/trailers", getTvShowTrailers);
router.get("/:id/details", getTvShowDetails);
router.get("/:id/similar", getSimilarTvShows);
router.get("/:category", getTvShowsByCategory);

export default router;
