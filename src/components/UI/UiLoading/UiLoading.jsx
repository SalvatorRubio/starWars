import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import cn from "classnames";

import loaderWhite from "./img/loader-white.svg";
import loaderBlack from "./img/loader-black.svg";
import loaderBlue from "./img/loader-blue.svg";

import styles from "./UiLoading.module.css";

const UiLoading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      default:
        setLoaderIcon(loaderWhite);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <img
      src={loaderIcon}
      alt="Loader"
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
    />
  );
};

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoading;
