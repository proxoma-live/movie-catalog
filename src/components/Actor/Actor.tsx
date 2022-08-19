import { BACKDROP_SIZE, IMG_BASE_URL } from "../../config";

import styles from "./actor.module.css";

interface Props {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  handleClick: (id: string | number) => void;
}

const Actor: React.FC<Props> = ({
  name,
  profile_path,
  character,
  id,
  handleClick,
}) => {
  return (
    <div className={styles.actor}>
      <img
        className={styles.image}
        src={IMG_BASE_URL + BACKDROP_SIZE + profile_path}
        alt="actor"
        onClick={() => handleClick(id)}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{character}</p>
    </div>
  );
};

export default Actor;
