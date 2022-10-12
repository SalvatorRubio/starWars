import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import UIInput from "@UI/UIInput/UIInput";

import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return { name, id, img };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <div>
      <h1 className="header__text">Search</h1>

      <UIInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input characters name"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people} />
    </div>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
