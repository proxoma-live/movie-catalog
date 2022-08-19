import styles from "./search.module.css";

const Search: React.FC<{
  changeSearchTerm: (searchTerm: string | number) => void;
}> = ({ changeSearchTerm }) => {
  return (
    <div className={styles.field}>
      <label htmlFor="search" className={styles.fieldPrompt}>
        Search
      </label>
      <input
        id="search"
        className={styles.fieldInput}
        onChange={(e) => {
          changeSearchTerm(e.target.value);
        }}
        type="text"
      />

      <img className={styles.searchIcon} src="" alt="" />
    </div>
  );
};

export default Search;
