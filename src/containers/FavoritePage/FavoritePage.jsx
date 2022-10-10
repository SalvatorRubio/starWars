import React from "react";
import { useSelector } from "react-redux";

import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const store = useSelector((state) => state.personSlice.favoritePersons);

  return (
    <>
      <h1 className="header__text">Favorites Page</h1>
      <div className={styles.container}>
        {store.length ? (
          <PeopleList people={store} />
        ) : (
          <h2 className={styles.comment}>No data</h2>
        )}
      </div>
    </>
  );
};

export default FavoritePage;
