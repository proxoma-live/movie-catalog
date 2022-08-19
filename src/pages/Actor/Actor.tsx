import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { POSTER_SIZE, IMG_BASE_URL } from "../../config";
import { useFetchActor } from "../../hooks/useFetchActor";

import Spinner from "../../components/Spinner";

import styles from "./actor.module.css";

interface Data {
  data: {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    deathday: null | string;
    gender: null | boolean;
    homepage: null | string;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
    birthday: string;
  } | null;
  loading: boolean;
  images:
    | {
        aspect_ratio: number;
        file_path: string;
        height: number;
        iso_639_1: null;
        vote_average: number;
        vote_count: number;
        width: number;
      }[]
    | null;
  error: string | undefined | null;
}

function Actor() {
  const { id }: any = useParams();
  const { t } = useTranslation("translation", { keyPrefix: "actor" });

  const { data: actor, images, loading, error }: Data = useFetchActor(id);

  return (
    <>
      {loading && <Spinner />}

      {!loading && !error && actor && images && (
        <div className={styles.container}>
          <div className={styles.personInner}>
            <div className={styles.personImage}>
              <img
                src={IMG_BASE_URL + POSTER_SIZE + actor.profile_path}
                className={styles.actor}
                alt="profile"
              />
            </div>
            <div className={styles.properties}>
              <h3 className={styles.name}>{actor.name}</h3>
              <div className={styles.property}>
                <p>{t("birthday")}</p>
                <p className={styles.propertyContent}>{actor.birthday}</p>
              </div>
              <div className={styles.property}>
                <p>{t("biography")}</p>
                <p className={styles.propertyContent}>{actor.biography}</p>
              </div>
            </div>
          </div>
          <div className={styles.photos}>
            <h3 className={styles.photosHeader}>{t("photos")}</h3>
            <div className={styles.images}>
              {images.slice(0, 10).map((image) => (
                <img
                  className={styles.image}
                  src={IMG_BASE_URL + POSTER_SIZE + image.file_path}
                  alt="actor"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Actor;
