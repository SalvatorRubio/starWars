import React from "react";
import { NavLink } from "react-router-dom";
import icon from "./img/bookmark.svg";

import styles from "./Favorite.module.css";
import { useSelector } from "react-redux";

const Favorite = () => {
  const store = useSelector((state) => state.personSlice.favoritePersons);
  return (
    <div className={styles.wrapper}>
      <NavLink to="/favorite">
        <span className={styles.counter}>
          {store.length > 99 ? "..." : store.length}
        </span>
        <img className={styles.icon} src={icon} alt="Favorites" />
      </NavLink>
    </div>
  );
};

export default Favorite;
