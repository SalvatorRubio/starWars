import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import { withErrorApi } from "@hoc/withErrorApi";
import { useQueryParams } from "@hooks/useQueryParams";

import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation/PeopleNavigation";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResources = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return { name, id, img };
      });
      setPeople(peopleList);
      setNextPage(res.next);
      setPrevPage(res.previous);

      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResources(API_PEOPLE + queryPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PeopleNavigation
        getResources={getResources}
        nextPage={nextPage}
        prevPage={prevPage}
        counterPage={counterPage}
      />
      <div className={styles.people__list}>
        {people && <PeopleList people={people} />}
      </div>
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
