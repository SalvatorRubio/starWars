import React from "react";
import PropTypes from "prop-types";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";

import cn from "classnames";

import darkSide from "./img/dark-side.jpg";
import falcon from "./img/falcon.jpg";
import lightSide from "./img/light-side.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ text, img, theme, classes }) => {
  const isTheme = useTheme();
  return (
    <div
      onClick={() => isTheme.change(theme)}
      className={cn(styles.item, classes)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  classes: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: lightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: darkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "Neitral Side",
      img: falcon,
      classes: styles.item__neitral,
    },
  ];
  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
