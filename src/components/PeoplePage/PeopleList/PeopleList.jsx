import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <>
      {people.map(({ id, img, name }) => {
        return (
          <div className={styles.people__item} key={id}>
            <Link to={`/people/${id}`}>
              <img src={img} className={styles.person_photo} alt="Фотография" />
              <h1>{name}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
