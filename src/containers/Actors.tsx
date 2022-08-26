import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IMG_BASE_URL, BACKDROP_SIZE } from "../config";

import Actor from "../components/Actor";

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
  }[];
  containerClassName?: string;
  headerClassName?: string;
}

const Actors: React.FC<Props> = (props) => {
  const { actors, containerClassName, headerClassName } = props;
  const history = useHistory();
  const { t } = useTranslation("translation", { keyPrefix: "movie" });

  const handleClick = (id: string | number) => {
    history.push(`/people/${id}`);
  };

  return (
    <>
      <h1 className={headerClassName}>{t("actors")}</h1>
      <div className={containerClassName}>
        {actors.slice(0, 7).map((actor) => (
          <Actor
            {...actor}
            handleClick={handleClick}
            full_profile_path={
              IMG_BASE_URL + BACKDROP_SIZE + actor.profile_path
            }
          />
        ))}
      </div>
    </>
  );
};

export default Actors;
