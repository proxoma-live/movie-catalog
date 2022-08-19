import { useState, useCallback } from "react";
import { debounce } from "lodash";

import Navbar from "../../components/Navbar";
import MovieContainer from "../../containers/Movies";

import styles from "./listMovies.module.css";

const ListMovies = () => {
  const [searchTerm, setSearchTerm] = useState<number | string>("");

  const changeSearchTerm = (search: string | number) => {
    functionDebounce(search);
  };

  const functionDebounce = useCallback(
    debounce((search: string | number) => {
      setSearchTerm(search);
    }, 500),
    [searchTerm]
  );

  return (
    <div className={styles.container}>
      <Navbar changeSearchTerm={changeSearchTerm} />

      <MovieContainer searchTerm={searchTerm} />
    </div>
  );
};

export default ListMovies;
