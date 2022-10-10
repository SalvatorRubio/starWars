import React from "react";
import { useSelector } from "react-redux";

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const store = useSelector((state) => state.personSlice.favoritePersons);
  console.log(store);
  return <></>;
};

export default FavoritePage;
