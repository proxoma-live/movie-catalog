import styles from "./paginate.module.css";

interface Props {
  children: JSX.Element[];
}

const Paginate: React.FC<Props> = ({ children }) => (
  <ul className={styles.pagination}>{children}</ul>
);

export default Paginate;
