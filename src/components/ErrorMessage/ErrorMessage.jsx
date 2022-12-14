import React from "react";

import UIVideo from "@UI/UIVideo/UIVideo";
import video from "./video/han-solo.mp4";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The Dark Side of the force has won.
        <br /> We cannot display data.
        <br /> Come back when we fix everything.
      </p>

      <UIVideo src={video} classes={styles.video} />
    </>
  );
};

export default ErrorMessage;
