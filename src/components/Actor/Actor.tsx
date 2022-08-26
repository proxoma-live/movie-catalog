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
  full_profile_path: string;
  handleClick: (id: string | number) => void;
}

const Actor: React.FC<Props> = ({
  name,
  character,
  id,
  handleClick,
  full_profile_path,
}) => {
  return (
    <div className={styles.actor}>
      <img
        className={styles.image}
        src={full_profile_path}
        alt="actor"
        onClick={() => handleClick(id)}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{character}</p>
    </div>
  );
};

export default Actor;
