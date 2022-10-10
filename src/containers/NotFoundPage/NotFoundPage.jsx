import React from "react";
import { useLocation } from "react-router-dom";
import img from "./img/not-found.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
      <img className={styles.img} src={img} alt="Not found" />
      <p className={styles.text}>Not found for {location.pathname}</p>
    </>
  );
};

export default NotFoundPage;
