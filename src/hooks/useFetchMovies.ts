import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import { URL, KEY } from "../config";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export const useFetchMovies = (page: string, searchTerm: string | number) => {
  const [data, setData] = useState<Array<Movie> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | null | string>(null);

  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async ( page: string, searchTerm: string | number ) => {
      try {
        setLoading(true);

        if(searchTerm === "" || searchTerm === 0) {
          const res = await fetch(`${URL}discover/movie?api_key=${KEY}&page=${page}&language=${i18n.language}`);
          const json = await res.json();
  
          setData(json.results);
          
          setLoading(false);
        }
        else {
          const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchTerm}&language=${i18n.language}&page=${page}`);
          
          const json = await res.json();

          setData(json.results);

          setLoading(false);
        }
  
      }
      catch (err: any) {
        if(err.name === "AbortError") {
          console.log("Fetch was aborted.")
        }
        else {
          setLoading(false);
          setError("Couldn't fetch data");
          console.log("Error message:", err.message)
        }
      }
    }

    fetchData(page, searchTerm);
  }, [page, searchTerm, i18n.language]);

  return { data, loading, error}
}

export default useFetchMovies