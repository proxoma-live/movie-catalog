import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { URL, KEY } from "../config"

interface Actor {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  deathday: null | string;
  gender: null | boolean;
  homepage: null | string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  birthday: string;
}
interface Images {
  aspect_ratio: number,
  file_path: string,
  height: number;
  iso_639_1: null;
  vote_average: number;
  vote_count: number;
  width: number;
}


export const useFetchActor = (id: number) => {
  const [data, setData] = useState<null | Actor>(null);
  const [images, setImages] = useState<null | Images[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | null | string>(null);

  const {i18n} = useTranslation();
  
  console.log("images",images)

  useEffect(() => {


    const fetchData = async ( id: number ) => {
      try {
        setLoading(true);

        const actor = await (await fetch(`${URL}person/${id}?api_key=${KEY}&language=${i18n.language}`)).json();

        const actorImages = await (await fetch(`${URL}person/${id}/images?api_key=${KEY}`)).json();

        setData(actor);
        setImages(actorImages.profiles);

        setLoading(false);

      }
      catch (err: any) {
        if(err.name === "AbortError") {
          console.log("Fetch was aborted.");
        }
        else {
          setLoading(false);
          setError("Couldn't fetch data");
          console.log("Error message:", err.message);
        }
      }
    }
    fetchData(id);
  }, [id, i18n.language]);

  return { data, images, loading, error}
}