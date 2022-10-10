import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import styles from "./App.module.css";
import Header from "@components/Header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
