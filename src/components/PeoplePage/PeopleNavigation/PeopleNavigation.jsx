import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UIButton from "@UI/UIButton/UIButton";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({
  getResources,
  nextPage,
  prevPage,
  counterPage,
}) => {
  const handleChangeNext = () => getResources(nextPage);
  const handleChangePrev = () => getResources(prevPage);
  return (
    <>
      <div className={styles.container}>
        <Link
          to={`/people/?page=${counterPage - 1}`}
          className={styles.buttons}
        >
          <UIButton
            onClick={handleChangePrev}
            text="Previous"
            disabled={!prevPage}
          />
        </Link>
        <Link
          to={`/people/?page=${counterPage + 1}`}
          className={styles.buttons}
        >
          <UIButton
            onClick={handleChangeNext}
            text="Next"
            disabled={!nextPage}
          />
        </Link>
      </div>
    </>
  );
};

PeopleNavigation.propTypes = {
  getResources: PropTypes.func,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
