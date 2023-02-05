import React, { useRef, useState } from "react";
// prettier-ignore

import { ToastPortal } from "components";
import styles from "./App.module.scss";
import { Home } from "pages";

export const ToastContext = React.createContext();

function App() {
  const toast = useRef(null);

  console.log("toast", toast.current);

  return (
    <>
      <ToastContext.Provider value={toast}>
        <Home />
      </ToastContext.Provider>
      <ToastPortal ref={toast} />
    </>
  );
}

export default App;
