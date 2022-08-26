import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import ActorsContainer from "../../containers/Actors";
import Spinner from "../../components/Spinner";
import RecommendationsContainer from "../../containers/Recommendations";
import { convertToDollars } from "../../utils/convertToDollars";
import { toHoursAndMinutes } from "../../utils/convertToHours";
import { IMG_BASE_URL, POSTER_SIZE } from "../../config";
import useFetchMovie from "../../hooks/useFetchMovie";

import styles from "./movie.module.css";

interface RecommendationsInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
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
  cast: Cast[] | null;
  recommendations: RecommendationsInterface[] | null;
  loading: boolean;
  error: undefined | null | string;
}

const Movie: React.FC = () => {
  const { id }: any = useParams();
  const { t } = useTranslation("translation", { keyPrefix: "movie" });

  const {
    data: movie,
    cast: actors,
    recommendations,
    loading,
    error,
  }: data = useFetchMovie(id);

  return (
    <>
      {console.log(
        "stuff",
        styles.actorsContainer,
        typeof styles.actorsContainer
      )}
      {loading && <Spinner />}
      {!loading &&
        !error &&
        movie &&
        styles &&
        actors &&
        recommendations &&
        movie.poster_path && (
          <div className={styles.container}>
            <div className={styles.main}>
              <img
                src={IMG_BASE_URL + POSTER_SIZE + movie.poster_path}
                alt="Poster"
                className={styles.poster}
              />
              <div className={styles.properties}>
                <div className={styles.property}>
                  <p>{t("title")}</p>
                  <h1>{movie.title}</h1>
                </div>
                <div className={styles.property}>
                  <p className={styles.property}>{t("overview")}</p>
                  <p>{movie.overview}</p>
                </div>
                <div className={styles.property}>
                  <p>{t("release_date")}</p>
                  <h6>{movie.release_date}</h6>
                </div>
                <div
                  className={movie.budget === 0 ? styles.none : styles.property}
                >
                  <p>{t("budget")}</p>
                  <h6>{convertToDollars(movie.budget)}</h6>
                </div>

                <div
                  className={
                    movie.revenue === 0 ? styles.none : styles.property
                  }
                >
                  <p>{t("revenue")}</p>
                  <h6>{convertToDollars(movie.revenue)}</h6>
                </div>
                <div className={styles.property}>
                  <p className={styles.property}>{t("duration")}</p>
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
              <ActorsContainer
                actors={actors}
                containerClassName={styles.actorsContainer}
                headerClassName={styles.header}
              />
              <RecommendationsContainer
                recommendations={recommendations}
                containerClassName={styles.recommendationContainer}
                headerClassName={styles.recommendationHeader}
              />
            </div>
          </div>
        )}
    </>
  );
};

export default Movie;
