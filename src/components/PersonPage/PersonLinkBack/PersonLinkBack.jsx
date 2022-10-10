import React from "react";
import { useNavigate } from "react-router-dom";
import iconBack from "./img/back.png";
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img src={iconBack} className={styles.link__img} alt="Icon Back" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
