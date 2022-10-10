import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "@store/slices/personSlice";

import iconFavoriteFill from "./img/favorite-fill.svg";
import iconFavorite from "./img/favorite.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personId,
  personName,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          id: personId,
          name: personName,
          img: personPhoto,
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt="Phot" />
        <img
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          className={styles.favorite}
          alt="Favorite"
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
