import { Link, useParams } from "react-router-dom";

import styles from "./pagination.module.css";

const Pagination: React.FC = () => {
  const { page }: any = useParams();
  let pageNumbers = [1, 2, 3, 4, 5];

  if (page >= 5) {
    const number = parseInt(page);
    pageNumbers = [number - 2, number - 1, number, number + 1, number + 2];
  }

  return (
    <>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <Link to={`/page/${number}`} className={styles.pageLink}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
