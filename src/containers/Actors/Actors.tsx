import { useHistory } from "react-router-dom";

import Actor from "../../components/Actor";

import styles from "./actors.module.css";

interface Props {
  actors: {
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
    someother: string;
  }[];
}

const Actors: React.FC<Props> = ({ actors }) => {
  const history = useHistory();

  const handleClick = (id: string | number) => {
    history.push(`/people/${id}`);
  };

  return (
    <div className={styles.actors}>
      {actors.slice(0, 7).map((actor) => (
        <Actor {...actor} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Actors;
