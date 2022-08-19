import { Link, useParams } from "react-router-dom";

import Paginate from "../../components/Pagination";

import styles from "./pagination.module.css";

const Pagination: React.FC = () => {
  const { page }: any = useParams();
  let pageNumbers = [1, 2, 3, 4, 5];

  if (page >= 5) {
    const number = parseInt(page);
    pageNumbers = [number - 2, number - 1, number, number + 1, number + 2];
  }

  const url = (pageNum: number) => {};

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
