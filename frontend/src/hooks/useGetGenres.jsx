import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetGenres = () => {
  const [genres, setGenres] = useState([]);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getGenres = async () => {
      const res = await axios.get(`/api/v1/${contentType}/genres`);

      const updatedGenres = res.data.genres.map(genre =>
        genre.name === "Science Fiction" ? { ...genre, name: "Sci-Fi" } : genre
      );

      setGenres(updatedGenres);
    };

    getGenres();
  }, [contentType]);

  return { genres };
};
export default useGetGenres;
