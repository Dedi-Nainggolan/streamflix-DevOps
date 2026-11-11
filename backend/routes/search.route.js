import express from "express";
import {
  searchPerson,
  searchMovie,
  searchTvShow,
  getSearchHistory,
  removeItemFromSearchHistory,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv-show/:query", searchTvShow);

router.get("/history", getSearchHistory);
router.delete("/history/:id", removeItemFromSearchHistory);

export default router;
