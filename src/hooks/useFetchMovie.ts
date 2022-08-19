import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { URL, KEY } from "../config"

interface Cast {
  adult: boolean,
  gender: number | null,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string | null,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number,
  someother: string
}

interface movieData {
  adult: boolean,
  original_title: string,
  backdrop_path: string,
  belongs_to_collection: Object,
  budget: number,
  genres: [],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: [],
  production_countries: [],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: [],
  status: string,
  tagline: string,
  video: boolean,
  vote_average: number,
  vote_count: number
  title: string
}

interface Recommendations {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  media_type: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const useFetchMovies = (id: string) => {
  const [data, setData] = useState<movieData | null>(null);
  const [cast, setCast] = useState<null | Cast[]>(null)
  const [recs, setRecs] = useState<null | Recommendations[]>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | null | string>(null);

  const {i18n} = useTranslation();
  

  useEffect(() => {
    const fetchData = async ( id: string ) => {
      try {
        setLoading(true);

        const movie = await (await fetch(`${URL}movie/${id}?api_key=${KEY}&language=${i18n.language}&append_to_response=credits,images,recommendations`)).json();


        setData(movie);
        setCast(movie.credits.cast);
        setRecs(movie.recommendations.results);

        setLoading(false);
  
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
    fetchData(id);
  }, [id, i18n.language]);

  return { data, cast, recs, loading, error}
}

export default useFetchMovies