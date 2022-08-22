import { Link, useParams } from "react-router-dom";

import Paginate from "../../components/Pagination";

import styles from "./pagination.module.css";

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

interface Props {
  movies: Movie[];
}

const Pagination: React.FC<Props> = ({ movies }: Props) => {
  const { page }: any = useParams();
  const pageNumbers = [];

  let totalPosts = 10;
  const postsPerPage = 20;

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Paginate>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <Link to={`/page/${number}`} className={styles.pageLink}>
              {number}
            </Link>
          </li>
        ))}

        {/* <Paginate total current onChange={(current) => history.push(`/page/${current}`)}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <div onClick={() => onChange(number)} className={styles.pageLink}>
              {number}
            </div>
          </li>
        ))}
      </Paginate> */}
      </Paginate>
    </>
  );
};

export default Pagination;
