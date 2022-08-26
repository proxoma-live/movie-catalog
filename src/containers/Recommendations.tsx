import { useHistory } from "react-router-dom";

import RecommendationComponent from "../components/Recommendation";
import { IMG_BASE_URL, MOVIE_SIZE, POSTER_SIZE } from "../config";

interface Props {
  recommendations: {
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
  }[];
  containerClassName?: string;
  headerClassName?: string;
}

const Recommendations: React.FC<Props> = (props) => {
  const { recommendations, containerClassName, headerClassName } = props;

  const history = useHistory();

  const handleClick = (id: string | number) => history.push(`/movie/${id}`);

  return (
    <>
      <h1 className={headerClassName}>Recommendations</h1>
      {recommendations && (
        <div className={containerClassName}>
          {recommendations.map((recommendation) => (
            <RecommendationComponent
              poster_path={recommendation.poster_path}
              title={recommendation.title}
              genre_ids={recommendation.genre_ids}
              id={recommendation.id}
              full_poster_path={
                IMG_BASE_URL + POSTER_SIZE + recommendation.poster_path
              }
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Recommendations;
