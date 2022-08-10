import { useState, useEffect } from "react";


export const useFetchMovies = (url: string) => {
  const [data, setData] = useState<Array<object> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<undefined |null | string>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        if(!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();
        

        setData(json.results);
  
        setLoading(false);
      }
      catch (err: any) {
        setLoading(false);
        setError("Couldn't fetch data");
        console.log("Error message:", err.message)
      }
    }
    fetchTrips();
  }, [url])

  return { data, loading, error}
}

export default useFetchMovies