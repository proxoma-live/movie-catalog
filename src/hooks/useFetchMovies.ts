import { useState, useEffect } from "react";


export const useFetchMovies = (url: string) => {
  const [data, setData] = useState<Array<object> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined | null | string>(null);

  useEffect(() => {
    const fetchData = async ( url: string ) => {
      try {
        setLoading(true);

        const res = await fetch(url);
        const json = await res.json();

        setData(json.results);
        
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
    fetchData(url);
  }, [url]);

  return { data, loading, error}
}

export default useFetchMovies