import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "@store/slices/personSlice";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({ personPhoto, personId, personName }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt="Phot" />
      </div>
      <button
        onClick={() =>
          dispatch(
            setPersonToFavorite({
              id: personId,
              name: personName,
              img: personPhoto,
            })
          )
        }
      >
        Добавить в избранное
      </button>
      <button onClick={() => dispatch(removePersonFromFavorite(personId))}>
        Удалить из избранного
      </button>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonPhoto;
