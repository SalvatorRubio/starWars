import React from "react";
import PropTypes from "prop-types";

import cn from "classnames";
import icon from "./img/close.svg";
import "../index.css";

import styles from "./UIInput.module.css";

const UIInput = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        src={icon}
        onClick={() => {
          value && handleInputChange("");
        }}
        alt="Clear"
        className={cn(styles.clear, !value && styles.clear__disabled)}
      />
    </div>
  );
};

UIInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default UIInput;
