import { useState, useEffect } from "react";

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

export const useFetchMovies = (id: string) => {
  const [data, setData] = useState<movieData | null>(null);
  const [secondaryData, setSecondaryData] = useState<null | Cast[]>(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | null | string>(null);
  

  useEffect(() => {
    const fetchData = async ( id: string ) => {
      try {
        setLoading(true);

        const movie = await (await fetch(`${URL}movie/${id}?api_key=${KEY}`)).json();
        const credits = await (await fetch(`${URL}movie/${id}/credits?api_key=${KEY}`)).json();


        setSecondaryData(credits.cast);
        setData(movie);
        
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
  }, [id]);

  return { data, secondaryData, loading, error}
}

export default useFetchMovies