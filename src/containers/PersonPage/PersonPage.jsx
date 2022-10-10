import React, { useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc/withErrorApi";
import { getPeopleImage } from "@services/getPeopleData";

import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";

import UiLoading from "@UI/UiLoading/UiLoading";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);

  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      if (res) {
        setPersonInfo([
          {
            title: "Height",
            data: res.height,
          },
          {
            title: "Mass",
            data: res.mass,
          },
          {
            title: "Hair color",
            data: res.hair_color,
          },
          {
            title: "Skin color",
            data: res.skin_color,
          },
          {
            title: "Eye color",
            data: res.eye_color,
          },
          {
            title: "Birth year",
            data: res.birth_year,
          },
          {
            title: "Gender",
            data: res.gender,
          },
        ]);
        setPersonName(res.name);
        res.films && setPersonFilms(res.films);
        setPersonPhoto(getPeopleImage(id));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personId={id}
            personName={personName}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme="white" isShadow />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
