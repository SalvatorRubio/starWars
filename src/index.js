import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@store/store";
import ThemeProvider from "@context/ThemeProvider";
import App from "@containers/App/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
