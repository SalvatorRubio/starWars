import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";

import Favorite from "@components/Favorite/Favorite";

import imgDroid from "./img/droid.svg";
import imgLightSaber from "./img/lightsaber.svg";
import imgStarDeath from "./img/spacestation.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgStarDeath);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSaber);
        break;
      case THEME_DARK:
        setIcon(imgStarDeath);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;

      default:
        setIcon(imgStarDeath);
        break;
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt="Icon" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>

        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
