import React from "react";

import styles from "./moviecontainer.module.css";

interface Props {
  children: React.ReactNode | null | undefined;
}

function MovieContainer(props: Props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default MovieContainer;
