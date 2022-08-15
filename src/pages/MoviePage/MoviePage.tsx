import { useParams } from "react-router-dom";

import { convertToDollars } from "../../functions/convertToDollars";
import { toHoursAndMinutes } from "../../functions/convertToHours";
import { IMG_BASE_URL, POSTER_SIZE } from "../../config";
import useFetchMovie from "../../hooks/useFetchMovie";
import Actor from "../../components/Actor";

import styles from "./MoviePage.module.css";

interface Cast {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  someother: string;
}

interface data {
  data: {
    adult: boolean;
    original_title: string;
    backdrop_path: string;
    belongs_to_collection: Object;
    budget: number;
    genres: [];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: [];
    production_countries: [];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    title: string;
  } | null;
  secondaryData: Cast[] | null;
  loading: boolean;
  error: undefined | null | string;
}

function MoviePage() {
  const { id }: any = useParams();

  const {
    data: movie,
    secondaryData: actors,
    loading,
    error,
  }: data = useFetchMovie(id);

  console.log("Actors,", actors);

  return (
    <>
      {!loading && !error && movie && actors && (
        <div className={styles.container}>
          <div className={styles.main}>
            <img
              src={IMG_BASE_URL + POSTER_SIZE + movie?.poster_path}
              alt="Poster"
              className={styles.poster}
            />
            <div className={styles.properties}>
              <div className={styles.property}>
                <p>Title:</p>
                <h1>{movie.title}</h1>
              </div>
              <div className={styles.property}>
                <p className={styles.property}>Overview:</p>
                <p>{movie.overview}</p>
              </div>
              <div className={styles.property}>
                <p>Release Date:</p>
                <h6>{movie.release_date}</h6>
              </div>
              <div
                className={movie.budget === 0 ? styles.none : styles.property}
              >
                <p>Budget:</p>
                <h6>{convertToDollars(movie.budget)}</h6>
              </div>

              <div
                className={movie.revenue === 0 ? styles.none : styles.property}
              >
                <p>Revenue:</p>
                <h6>{convertToDollars(movie.revenue)}</h6>
              </div>
              <div className={styles.property}>
                <p className={styles.property}>Duration:</p>
                <h6>{toHoursAndMinutes(movie.runtime)}</h6>
              </div>
              <div className={styles.propertyGenres}>
                {movie.genres.map((genreObj) => (
                  <p className={styles.genre}>{genreObj["name"]}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            <h1 className={styles.header}>Actors</h1>
            <div className={styles.actors}>
              {actors.slice(0, 7).map((actor) => (
                <Actor actor={actor} />
              ))}
            </div>
            <div className="images(screen shots) flex">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="recommendations">
            <img src="" alt="" />
            <h6>Shut in</h6>
            <p>Horror, Thriller</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePage;
