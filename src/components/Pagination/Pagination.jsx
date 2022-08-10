import styles from "./pagination.module.css";

const Pagination = ({ paginate }) => {
  const pageNumbers = [1, 2, 3, 4, 5];

  console.log("Pagination component rendered.");

  const handleClick = (number) => {
    console.log("HandleClick function triggered", number);
    paginate(number);
  };

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageItem}>
            <a onClick={() => handleClick(number)} className={styles.pageLink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
