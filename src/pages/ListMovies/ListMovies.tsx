import { useState, useCallback } from "react";
import { debounce } from "lodash";

import Navbar from "../../components/Navbar";
import MovieContainer from "../../containers/Movies";

import styles from "./listMovies.module.css";

const ListMovies = () => {
  const [searchTerm, setSearchTerm] = useState<number | string>("");

  const changeSearchTerm = (search: string | number) => {
    debouce(search);
  };

  const debouce = useCallback(
    debounce((search: string | number) => {
      setSearchTerm(search);
    }, 500),
    [searchTerm]
  );

  return (
    <div className={styles.container}>
      <Navbar changeSearchTerm={changeSearchTerm} />

      <MovieContainer
        searchTerm={searchTerm}
        containerClassName={styles.movieContainer}
      />
    </div>
  );
};

export default ListMovies;
